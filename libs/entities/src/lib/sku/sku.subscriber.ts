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

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface<Sku> {
  listenTo() {
    return Sku;
  }

  async afterInsert(event: InsertEvent<Sku>) {
    const priceRepo = event.manager.getRepository(Price);
    const priceLevelRepo = event.manager.getRepository(PriceLevel);

    const priceLevels = await priceLevelRepo.find();
    const { id, updatedBy, createdBy } = event.entity;

    const data: DeepPartial<Price>[] = priceLevels.map((pl) => {
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

    await priceRepo.save(data);
  }
}
