import { RestApiPaths } from '@mdtx/utils';
import { AxiosResponse } from 'axios';
import { IRelationDto, IUnsetRelationDto } from '../relation';

export class ResourceHttpClientHelper {
  constructor(
    protected readonly prefix: string,
    protected readonly apiPaths: RestApiPaths
  ) {}

  path(path: string) {
    console.log("IS PATH WORKING ? .......................")
    return `${this.prefix}/${path}`;
  }

  query(query?: any) {
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

  idpath(id: number) {
    return this.path(this.apiPaths.BY_ID_PATH.replace(':id', id + ''));
  }

  singular(query?: any) {
    return this.path(this.apiPaths.SINGULAR_PATH) + this.query(query);
  }

  plural(query?: any) {
    return this.path(this.apiPaths.PLURAL_PATH) + this.query(query);
  }

  relationPath(relationDto: IRelationDto) {
    const { id, relationId, relationName } = relationDto;
    const path = this.apiPaths.RELATION_NAME_AND_ID_PATH.replace(':id', id + '')
      .replace(':relationId', relationId + '')
      .replace(':relationName', relationName + '');
    return path;
  }

  unsetRelationPath(relationDto: IUnsetRelationDto) {
    const { id, relationName } = relationDto;
    const path = this.apiPaths.RELATION_NAME_AND_ID_PATH.replace(
      ':id',
      id + ''
    ).replace(':relationName', relationName + '');
    return path;
  }
}
