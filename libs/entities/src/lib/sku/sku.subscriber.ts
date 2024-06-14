import {
  DeepPartial,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Sku } from './sku.entity';
import { Price } from '../price';
import { PriceLevel } from '../price-level';
import { ISku } from '@mdtx/models';
import { Store } from '../store';
import { Quantity } from '../quantity';
import { SerialNumber } from '../serial-number';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface<Sku> {
  listenTo() {
    return Sku;
  }

  async afterInsert(event: InsertEvent<Sku>) {
    const priceRepo = event.manager.getRepository(Price);
    const priceLevelRepo = event.manager.getRepository(PriceLevel);
    const storeRepo = event.manager.getRepository(Store);
    const quantityRepo = event.manager.getRepository(Quantity);

    const stores = await storeRepo.find();

    const priceLevels = await priceLevelRepo.find();
    const { id, updatedBy, createdBy, name, product } = event.entity;

    const priceData: DeepPartial<Price>[] = priceLevels.map((pl) => {
      return {
        price: 999.99,
        cost: 99.99,
        active: true,
        updatedBy,
        createdBy,
        sku: { id } as ISku,
        notes: `${pl.name} Price`,
        priceLevel: { id: pl.id },
      };
    });

    const quantityData: DeepPartial<Quantity>[] = stores.map((str) => {
      return {
        quantity: 0,
        store: { id: str.id },
        sku: { id },
        active: true,
        notes: `Default quantity for ${name}`,
        createdBy,
        updatedBy,
      };
    });

    await priceRepo.save(priceData);

    await quantityRepo.save(quantityData);
  }
}
