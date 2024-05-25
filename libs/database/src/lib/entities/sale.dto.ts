import { ICreateSaleDto, IID } from '@mdtx/common';
import { Exclude, IDObjectProperty, PartialType, Property } from '@mdtx/core';

/**
 *
 * @param cart
 * @param employee
 * @param customer
 * @param accountBalancePayment
 * @param cashPayment
 * @param cardPayment
 * @param taxrate
 * @param tax
 * @param subtotal
 * @param total
 */
@Exclude()
export class CreateSaleDto implements Omit<ICreateSaleDto, 'user' | 'store'> {
  @IDObjectProperty({ required: true }) cart!: IID;
  @IDObjectProperty({ required: true }) employee!: IID;
  @IDObjectProperty({ required: true }) customer!: IID;
  @Property({ type: 'number', required: true }) accountBalancePayment!: number;
  @Property({ type: 'number', required: true }) cashPayment!: number;
  @Property({ type: 'number', required: true }) cardPayment!: number;
  @Property({ type: 'number', required: true }) taxrate!: number;
  @Property({ type: 'number', required: true }) tax!: number;
  @Property({ type: 'number', required: true }) subtotal!: number;
  @Property({ type: 'number', required: true }) total!: number;
}

@Exclude()
export class UpdateSaleDto extends PartialType(CreateSaleDto) {}
