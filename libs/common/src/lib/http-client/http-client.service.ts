/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRelationDto, IUnsetRelationDto } from '../relation';
import { RestApiPathBuilder, RestApiPaths } from '@mdtx/utils';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IID } from '../base';

export class HttpClient<
  T extends IID = any,
  CreateDto = any,
  UpdateDto = any,
  Query = any
> {
  readonly apiPaths: RestApiPaths;

  constructor(
    public readonly entityName: string,
    public readonly prefix: string,
    public readonly axiosConfig?: AxiosRequestConfig
  ) {
    this.apiPaths = RestApiPathBuilder.get(entityName);
  }

  config(): AxiosRequestConfig | undefined {
    return this.axiosConfig;
  }

  __path(path: string) {
    return `${this.prefix}/${path}`;
  }

  __query(query?: any) {
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

  __idpath(id: number) {
    return this.__path(this.apiPaths.BY_ID_PATH.replace(':id', id + ''));
  }

  __singular(query?: any) {
    return this.__path(this.apiPaths.SINGULAR_PATH) + this.__query(query);
  }

  __plural(query?: any) {
    return this.__path(this.apiPaths.PLURAL_PATH) + this.__query(query);
  }

  __relationPath(relationDto: IRelationDto) {
    const { id, relationId, relationName } = relationDto;
    const path = this.apiPaths.RELATION_NAME_AND_ID_PATH.replace(':id', id + '')
      .replace(':relationId', relationId + '')
      .replace(':relationName', relationName + '');
    return path;
  }

  __unsetRelationPath(relationDto: IUnsetRelationDto) {
    const { id, relationName } = relationDto;
    const path = this.apiPaths.RELATION_NAME_AND_ID_PATH.replace(
      ':id',
      id + ''
    ).replace(':relationName', relationName + '');
    return path;
  }

  async findAll(query?: Query) {
    const path = this.__plural(query);
    const res = await axios.get<T[]>(path, this.config());
    return this.parseResult(res);
  }

  async findOneById(id: number) {
    const res = await axios.get<T>(this.__idpath(id), this.config());
    return this.parseResult(res);
  }

  async saveOne(entity: CreateDto) {
    const res = await axios.post<CreateDto, AxiosResponse<T>>(
      this.__singular(),
      { ...entity },
      this.config()
    );
    return this.parseResult(res);
  }

  async updateOne(id: number, entity: UpdateDto): Promise<T> {
    const res = await axios.put<UpdateDto, AxiosResponse<T>>(
      this.__idpath(id),
      entity,
      this.config()
    );
    return this.parseResult(res);
  }

  async deleteOneById(id: number): Promise<T> {
    const res = await axios.delete<any, AxiosResponse<T>>(
      this.__idpath(id),
      this.config()
    );
    return this.parseResult(res);
  }

  async addRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.put<IRelationDto, AxiosResponse<T>>(
      this.__relationPath(relationDto),
      this.config()
    );
    return this.parseResult(res);
  }

  async removeRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.delete<IRelationDto, AxiosResponse<T>>(
      this.__relationPath(relationDto),
      this.config()
    );
    return this.parseResult(res);
  }

  async setRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.post<IRelationDto, AxiosResponse<T>>(
      this.__relationPath(relationDto),
      this.config()
    );
    return this.parseResult(res);
  }

  async unsetRelation(relationDto: IUnsetRelationDto): Promise<T> {
    const res = await axios.delete<IUnsetRelationDto, AxiosResponse<T>>(
      this.__unsetRelationPath(relationDto),
      this.config()
    );
    return this.parseResult(res);
  }
}
