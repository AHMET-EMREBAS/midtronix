export type TypeProperty<T, Q> = { [P in keyof T]: Q };
/**
 * Make all properties string
 */
export type StrProperty<T> = TypeProperty<T, string>;

/**
 * Pick partial
 */
export type PickPartial<T, K extends keyof T> = Partial<Pick<T, K>>;

/**
 * Key of T
 */
export type Keys<T, K extends keyof T> = K;
