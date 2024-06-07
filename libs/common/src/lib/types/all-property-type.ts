export type AllPropertyType<T, P> = Record<keyof T, P> & { id?: any };
