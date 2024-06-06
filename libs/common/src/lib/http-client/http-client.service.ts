import { IRelationDto, IUnsetRelationDto } from '../relation';
import { RestApiPathBuilder, RestApiPaths } from '@mdtx/utils';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IID } from '../base';

export class HttpClient<T extends IID, CreateDto, UpdateDto, Query> {
  readonly apiPaths: RestApiPaths;

  constructor(
    protected readonly entityName: string,
    protected readonly prefix: string,
    protected readonly axiosConfig: AxiosRequestConfig = {}
  ) {
    this.apiPaths = RestApiPathBuilder.get(entityName);
  }

  protected config(): AxiosRequestConfig {
    return this.axiosConfig;
  }

  protected __path(path: string) {
    return `${this.prefix}/${path}`;
  }

  __query(query: any) {
    if (query) {
      return (
        '/?' +
        Object.entries(query)
          .map(([key, value]) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(
              value + ''
            )}`;
          })
          .join('&')
      );
    }

    return '';
  }

  protected parseResult<T>(res: AxiosResponse<T>) {
    return res.data;
  }

  protected __idpath(id: number) {
    return this.__path(this.apiPaths.BY_ID_PATH.replace(':id', id + ''));
  }

  protected __singular(query?: any) {
    return this.__path(this.apiPaths.SINGULAR_PATH) + this.__query(query);
  }

  protected __plural(query: any) {
    return this.__path(this.apiPaths.PLURAL_PATH) + this.__query(query);
  }

  protected __relationPath(relationDto: IRelationDto) {
    const { id, relationId, relationName } = relationDto;
    const path = this.apiPaths.RELATION_NAME_AND_ID_PATH.replace(':id', id + '')
      .replace(':relationId', relationId + '')
      .replace(':relationName', relationName + '');
    return path;
  }

  protected __unsetRelationPath(relationDto: IUnsetRelationDto) {
    const { id, relationName } = relationDto;
    const path = this.apiPaths.RELATION_NAME_AND_ID_PATH.replace(
      ':id',
      id + ''
    ).replace(':relationName', relationName + '');
    return path;
  }

  async findAll(query?: Query) {
    const res = await axios.get<T[]>(this.__plural(query), this.config());
    return this.parseResult(res);
  }

  async findOneById(id: number) {
    const res = await axios.get<T>(this.__idpath(id), this.config());
    return this.parseResult(res);
  }

  async saveOne(entity: CreateDto) {
    const res = await axios.post(this.__singular(), entity, this.config());
    return this.parseResult(res);
  }

  async updateOne(id: number, entity: UpdateDto): Promise<T> {
    const res = await axios.put(this.__idpath(id), entity, this.config());
    return this.parseResult(res);
  }

  async deleteOneById(id: number): Promise<T> {
    const res = await axios.delete(this.__idpath(id));
    return this.parseResult(res);
  }

  async addRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.put(this.__relationPath(relationDto));
    return this.parseResult(res);
  }

  async removeRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.delete(this.__relationPath(relationDto));
    return this.parseResult(res);
  }

  async setRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.post(this.__relationPath(relationDto));
    return this.parseResult(res);
  }

  async unsetRelation(relationDto: IUnsetRelationDto): Promise<T> {
    const res = await axios.delete(this.__unsetRelationPath(relationDto));
    return this.parseResult(res);
  }
}
