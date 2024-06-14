export declare enum QueryOperator {
    EQUAL = "eq",
    MORE_THAN = "mt",
    LESS_THAN = "lt",
    MORE_THAN_OR_EQUAL = "mte",
    LESS_THAN_OR_EQUAL = "lte",
    START_WITH = "sw",
    END_WITH = "ew",
    CONTAIN = "cn",
    IN = "in",
    NOT_EQUAL = "neq",
    NOT_MORE_THAN = "nmt",
    NOT_LESS_THAN = "nlt",
    NOT_START_WITH = "nsw",
    NOT_END_WITH = "new",
    NOT_CONTAIN = "ncn",
    NOT_IN = "nin"
}
export declare class QueryBuilder {
    static EQUAL(query: string): string;
    static MORE_THAN(query: string): string;
    static LESS_THAN(query: string): string;
    static MORE_THAN_OR_EQUAL(query: string): string;
    static LESS_THAN_OR_EQUAL(query: string): string;
    static START_WITH(query: string): string;
    static END_WITH(query: string): string;
    static CONTAIN(query: string): string;
    static IN(query: string[]): string;
    static NOT_EQUAL(query: string): string;
    static NOT_MORE_THAN(query: string): string;
    static NOT_LESS_THAN(query: string): string;
    static NOT_START_WITH(query: string): string;
    static NOT_END_WITH(query: string): string;
    static NOT_CONTAIN(query: string): string;
    static NOT_IN(query: string[]): string;
}
export type QueryInput = {
    property: string;
    operator: string;
    value: string;
    and?: QueryInput;
    or?: QueryInput;
};
export declare function createQueryValue(query: Pick<QueryInput, 'operator' | 'value'>): string;
export declare function createQuery(query: QueryInput): string;
export declare function parseQueryInput(queryInput: string): Omit<QueryInput, 'property'> | undefined;
