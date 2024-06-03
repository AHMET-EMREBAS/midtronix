import { Transform } from 'class-transformer';

export function SortTransformer<T>(fields: (keyof T)[]) {
  return Transform(({ value }) => {
    if (typeof value === 'string') {
      const [orderBy, orderDir] = value.split(':');
      if (fields.find((e) => e === orderBy)) {
        if (orderBy && orderDir) {
          return {
            [orderBy]: orderDir,
          };
        }
      }
    }
    return undefined;
  });
}
