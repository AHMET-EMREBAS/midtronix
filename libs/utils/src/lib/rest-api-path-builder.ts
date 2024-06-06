import { plural } from './plural';

export type RestApiPaths = {
  METADATA_KEY: string;
  /**
   * id
   */
  ID_KEY: string;
  /**
   * relationId
   */
  RELATION_ID_KEY: string;
  /**
   * relationName
   */
  RELATION_NAME_KEY: string;

  /**
   * allows users to query entity's metadata like count, fields, unique fields, relations, and so more.
   */
  METADATA_PATH: string;
  /**
   * singular
   */
  SINGULAR_PATH: string;
  /**
   * plurals
   */
  PLURAL_PATH: string;
  /**
   * source/:id
   */
  BY_ID_PATH: string;
  /**
   * source/:id/:relationName
   */
  RELATION_NAME_PATH: string;
  /**
   * source/:id/:relationName/:relationId
   */
  RELATION_NAME_AND_ID_PATH: string;

  /**
   * source/count
   */
  COUNT_PATH: string;
};

export enum RestApiTokens {
  /**
   *  used to query metadata of the entityF
   */
  METADATA_KEY = 'metadata',

  /**
   * 'authToken'
   * */
  AUTH_TOKEN = 'authToken',
  /**
   * 'id'
   * */
  ID_KEY = 'id',
  /**
   * 'relationId'
   * */
  RELATION_ID_KEY = 'relationId',
  /**
   * 'relationName'
   * */
  RELATION_NAME_KEY = 'relationName',

  /**
   * 'count'
   */
  COUNT_KEY = 'count',
}

export class RestApiPathBuilder {
  private readonly METADATA_KEY = RestApiTokens.METADATA_KEY;
  private readonly ID_KEY = RestApiTokens.ID_KEY;
  private readonly RELATION_ID_KEY = RestApiTokens.RELATION_ID_KEY;
  private readonly RELATION_NAME_KEY = RestApiTokens.RELATION_NAME_KEY;
  private readonly COUNT_KEY = RestApiTokens.COUNT_KEY;
  private readonly SINGULAR_PATH = this.resourceName.toLowerCase();
  private readonly PLURAL_PATH = plural(this.SINGULAR_PATH);
  private readonly BY_ID_PATH = `${this.SINGULAR_PATH}/:${this.ID_KEY}`;
  private readonly RELATION_NAME_PATH = `${this.SINGULAR_PATH}/:${this.ID_KEY}/:${this.RELATION_NAME_KEY}`;
  private readonly RELATION_NAME_AND_ID_PATH = `${this.RELATION_NAME_PATH}/:${this.RELATION_ID_KEY}`;
  private readonly METADATA_PATH = `${this.PLURAL_PATH}/${this.METADATA_KEY}`;
  private readonly COUNT_PATH = `${this.PLURAL_PATH}/${this.COUNT_KEY}`;
  private constructor(protected readonly resourceName: string) {
    if (typeof resourceName !== 'string') {
      throw new Error('Resource name must be string!');
    }
  }

  private create(): RestApiPaths {
    return {
      ID_KEY: this.ID_KEY,
      RELATION_ID_KEY: this.RELATION_ID_KEY,
      RELATION_NAME_KEY: this.RELATION_NAME_KEY,
      METADATA_KEY: this.METADATA_KEY,
      METADATA_PATH: this.METADATA_PATH,
      SINGULAR_PATH: this.SINGULAR_PATH,
      PLURAL_PATH: this.PLURAL_PATH,
      BY_ID_PATH: this.BY_ID_PATH,
      RELATION_NAME_PATH: this.RELATION_NAME_PATH,
      RELATION_NAME_AND_ID_PATH: this.RELATION_NAME_AND_ID_PATH,
      COUNT_PATH: this.COUNT_PATH,
    };
  }

  /**
   * Create and return the RestApiPaths
   * @param resourceName
   * @returns
   */
  static get(resourceName: string) {
    return new RestApiPathBuilder(resourceName).create();
  }
}
