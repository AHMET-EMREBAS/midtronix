import { ViewEntity as TypeOrmViewEntity } from 'typeorm';
import { ViewEntityOptions } from 'typeorm/decorator/options/ViewEntityOptions';

export function ViewEntity(options?: ViewEntityOptions) {
  return TypeOrmViewEntity(options);
}
