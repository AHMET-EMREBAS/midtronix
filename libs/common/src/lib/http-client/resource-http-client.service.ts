/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRelationDto, IUnsetRelationDto } from '../relation';
import { RestApiPathBuilder, RestApiPaths } from '@mdtx/utils';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IID } from '../base';
import { ICountResponse } from '../response';
import { ResourceHttpClientHelper } from './resource-http-client-helper';
export class ResourceHttpClient<
  T extends IID = any,
  CreateDto = any,
  UpdateDto = any,
  Query = any
> {
  readonly apiPaths: RestApiPaths;
  protected readonly helper!: ResourceHttpClientHelper;

  constructor(
    protected readonly entityName: string,
    protected readonly prefix: string,
    protected readonly axiosConfig?: AxiosRequestConfig
  ) {
    this.apiPaths = RestApiPathBuilder.get(entityName);
    this.helper = new ResourceHttpClientHelper(prefix, this.apiPaths);
  }

  protected config(): AxiosRequestConfig | undefined {
    return this.axiosConfig;
  }
  protected parseResult<T>(res: AxiosResponse<T>) {
    return res.data;
  }

  async count(query?: Query) {
    const path =
      this.helper.path(this.apiPaths.COUNT_PATH) + this.helper.query(query);
    const res = await axios.get<ICountResponse>(path);
    return this.parseResult(res);
  }

  async findAll(query?: Query) {
    const path = this.helper.plural(query);
    const res = await axios.get<T[]>(path, this.config());
    return this.parseResult(res);
  }

  async findOneById(id: T['id']) {
    const res = await axios.get<T>(this.helper.idpath(id), this.config());
    return this.parseResult(res);
  }

  async saveOne(entity: CreateDto) {
    const res = await axios.post<CreateDto, AxiosResponse<T>>(
      this.helper.singular(),
      { ...entity },
      this.config()
    );
    return this.parseResult(res);
  }

  async updateOne(id: T['id'], entity: UpdateDto): Promise<T> {
    const res = await axios.put<UpdateDto, AxiosResponse<T>>(
      this.helper.idpath(id),
      entity,
      this.config()
    );
    return this.parseResult(res);
  }

  async deleteOneById(id: T['id']): Promise<T> {
    const res = await axios.delete<any, AxiosResponse<T>>(
      this.helper.idpath(id),
      this.config()
    );
    return this.parseResult(res);
  }

  async addRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.put<IRelationDto, AxiosResponse<T>>(
      this.helper.relationPath(relationDto),
      this.config()
    );
    return this.parseResult(res);
  }

  async removeRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.delete<IRelationDto, AxiosResponse<T>>(
      this.helper.relationPath(relationDto),
      this.config()
    );
    return this.parseResult(res);
  }

  async setRelation(relationDto: IRelationDto): Promise<T> {
    const res = await axios.post<IRelationDto, AxiosResponse<T>>(
      this.helper.relationPath(relationDto),
      this.config()
    );
    return this.parseResult(res);
  }

  async unsetRelation(relationDto: IUnsetRelationDto): Promise<T> {
    const res = await axios.delete<IUnsetRelationDto, AxiosResponse<T>>(
      this.helper.unsetRelationPath(relationDto),
      this.config()
    );
    return this.parseResult(res);
  }
}
