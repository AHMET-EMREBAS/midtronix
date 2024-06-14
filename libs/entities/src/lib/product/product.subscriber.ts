import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { Sku } from '../sku';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo() {
    return Product;
  }

  async afterInsert(event: InsertEvent<Product>): Promise<any> {
    const entity = event.entity;
    const skuRepo = event.manager.getRepository(Sku);

    {
      const {
        name,
        description,
        notes,
        createdBy,
        updatedBy,

        upc,
        id,
        quantity,
        price,
        cost,
      } = entity;

      const defaultSKU = await skuRepo.save({
        name,
        sku: 'SKU-' + upc,
        active: true,
        description,
        notes,
        createdBy,
        updatedBy,
        product: { id },
      });
    }
  }
}
