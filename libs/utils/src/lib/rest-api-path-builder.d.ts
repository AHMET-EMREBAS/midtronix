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
export declare enum RestApiTokens {
    /**
     *  used to query metadata of the entityF
     */
    METADATA_KEY = "metadata",
    /**
     * 'authToken'
     * */
    AUTH_TOKEN = "authToken",
    /**
     * 'id'
     * */
    ID_KEY = "id",
    /**
     * 'relationId'
     * */
    RELATION_ID_KEY = "relationId",
    /**
     * 'relationName'
     * */
    RELATION_NAME_KEY = "relationName",
    /**
     * 'count'
     */
    COUNT_KEY = "count"
}
export declare class RestApiPathBuilder {
    protected readonly resourceName: string;
    private readonly METADATA_KEY;
    private readonly ID_KEY;
    private readonly RELATION_ID_KEY;
    private readonly RELATION_NAME_KEY;
    private readonly COUNT_KEY;
    private readonly SINGULAR_PATH;
    private readonly PLURAL_PATH;
    private readonly BY_ID_PATH;
    private readonly RELATION_NAME_PATH;
    private readonly RELATION_NAME_AND_ID_PATH;
    private readonly METADATA_PATH;
    private readonly COUNT_PATH;
    private constructor();
    private create;
    /**
     * Create and return the RestApiPaths
     * @param resourceName
     * @returns
     */
    static get(resourceName: string): RestApiPaths;
}
