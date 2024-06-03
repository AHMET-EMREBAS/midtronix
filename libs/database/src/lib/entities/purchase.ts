import { IID, IPurchase } from '@mdtx/common';
import { BaseEntity } from './__base';
import {
  Entity,
  Column,
  OneRelation,
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
} from '@mdtx/core';
import { Manufacturer } from './manufacturer';
import { User } from './user';
import { Quantity, Sku } from './product';
import { SkuView } from './product.view';

@Entity()
export class Purchase
  extends BaseEntity
  implements IPurchase<Sku, Manufacturer, User>
{
  @Column({ type: 'numeric', default: 0 }) unitCost!: number;
  @Column({ type: 'numeric', default: 0 }) deliveryCost!: number;
  @Column({ type: 'numeric', default: 0 }) taxrate!: number;
  @Column({ type: 'int' }) quantity!: number;

  @Column({ type: 'varchar', nullable: true }) orderDate!: Date;
  @Column({ type: 'varchar', nullable: true }) expectedDeliveryDate!: Date;
  @Column({ type: 'varchar', nullable: true }) deliveryDate!: Date;

  @Column({ type: 'varchar', nullable: true }) notes!: string;

  @Column({ type: 'boolean', default: false }) delivered!: boolean;
  @Column({ type: 'boolean', default: false }) confirmed!: boolean;

  @OneRelation(Sku) sku!: Sku;
  @OneRelation(Manufacturer) manufacturer!: Manufacturer;
  @OneRelation(User) employee!: User;
}

@EventSubscriber()
export class PurchaseSubscriber implements EntitySubscriberInterface<Purchase> {
  listenTo() {
    return Purchase;
  }

  /**
   * Update quantity upon delivery
   * @param event
   * @returns
   */
  async afterUpdate(event: UpdateEvent<Purchase>) {
    const { id, delivered: isAlreadyDelivered } = event.databaseEntity;

    if (isAlreadyDelivered) return;

    const purchaseRepo = event.manager.getRepository(Purchase);
    const purchase = await purchaseRepo.findOneBy({ id });

    console.log('Purchase : ', purchase);

    if (purchase) {
      const skuId = purchase.sku.id + '';
      const storeId = 1 + '';

      const skuViewRepo = event.manager.getRepository(SkuView);

      if (purchase.delivered) {
        purchase.deliveryDate = new Date();

        const skuView = await skuViewRepo.findOneBy({
          skuId,
          storeId,
        });
        const quantityRepo = event.manager.getRepository(Quantity);

        await quantityRepo.increment(
          { id: skuView?.quantityId ? +skuView.quantity : undefined },
          'quantity',
          purchase.quantity
        );
      }
    }
  }
}
