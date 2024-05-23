import { Exclude, Property } from '@mdtx/core';

@Exclude()
export class QueryOrderViewDto {
  @Property({ type: 'string' }) cartId?: number;
}
