export type PartialPick<T, P extends keyof T> = Partial<Pick<T, P>>;

/**
 * Convert all properties' type to a type
 */
export type PropertyType<O, T> = { [P in keyof O]: T };

export type PickKeys<T, K extends keyof T> = K;
