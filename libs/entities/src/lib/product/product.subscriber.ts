import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { Sku } from '../sku';
import { SerialNumber } from '../serial-number';

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
        serialNumberRequired,
        upc,
        id: productId,
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
        product: { id: productId },
      });

      const serialNumberRepo = event.manager.getRepository(SerialNumber);

      if (serialNumberRequired) {
        const serailBase = upc;
        for (let i = 1; i <= quantity; i++) {
          await serialNumberRepo.save({
            serialNumber: `${serailBase}-${i}`,
            product: { id: productId },
            status: 'in stock',
            createdBy,
            updatedBy,
          });
        }
      }
    }
  }
}
