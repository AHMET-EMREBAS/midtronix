import {
  Column,
  Entity,
  ManyRelation,
  OneRelation,
  OwnerRelation,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from '@mdtx/core';
import { NameEntity, ProductCommonEntity, BaseEntity } from './__base';
import {
  IPrice,
  IPriceLevel,
  IProduct,
  IProductImage,
  IProductVideo,
  IQuantity,
  ISku,
} from '@mdtx/common';
import { Manufacturer } from './manufacturer';
import { Store } from './store';
import { ImageEntity, VideoEntity } from './media';
import { Category, Department } from './meta';

/**
 * @param name
 */
@Entity()
export class PriceLevel extends NameEntity implements IPriceLevel {
  @Column({ type: 'numeric' }) taxrate!: number;
  @Column({ type: 'varchar', nullable: true }) description!: string;
}

/**
 * @param name
 * @param description
 * @param upc
 * @param category
 * @param department
 * @param manufacturers
 */
@Entity()
export class Product
  extends ProductCommonEntity
  implements IProduct<Category, Department, Manufacturer>
{
  @OneRelation(Category) category!: Category;
  @OneRelation(Department) department!: Department;
  @ManyRelation(Manufacturer) manufacturers?: Manufacturer[];
}

/**
 * @param name
 * @param description
 * @param upc
 * @param product
 */
@Entity()
export class Sku extends ProductCommonEntity implements ISku<Product> {
  @OwnerRelation(Product, { eager: true })
  product!: Product;
}

/**
 * @param price
 * @param cost
 * @param sku
 * @param priceLevel
 */
@Entity()
export class Price extends BaseEntity implements IPrice<Sku, PriceLevel> {
  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  price!: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  cost!: number;

  @OwnerRelation(PriceLevel, { eager: true }) priceLevel!: PriceLevel;
  @OwnerRelation(Sku, { eager: true }) sku!: Sku;
}
/**
 * @param quantity
 * @param sku
 * @param store
 */
@Entity()
export class Quantity extends BaseEntity implements IQuantity<Sku, Store> {
  @Column({ type: 'int', nullable: true }) quantity!: number;
  @OwnerRelation(Sku, { eager: true }) sku!: Sku;
  @OwnerRelation(Store, { eager: true }) store!: Store;
}

@Entity()
export class ProductImage
  extends ImageEntity(Product)
  implements IProductImage<Product> {}

@Entity()
export class ProductVideo
  extends VideoEntity(Product)
  implements IProductVideo<Product> {}

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo() {
    return Product;
  }

  async afterInsert(event: InsertEvent<Product>) {
    console.log('Product: After Insert : ', event.entity);
    const product = event.entity;

    const skuRepo = event.manager.getRepository(Sku);

    await skuRepo.save({
      ...product,
      product,
    });
  }
}

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface<Sku> {
  listenTo() {
    return Sku;
  }

  async afterInsert(event: InsertEvent<Sku>) {
    console.log('SKU : After Insert : ', event.entity);
    const sku = event.entity;

    const priceRepo = event.manager.getRepository(Price);

    const storeRepo = event.manager.getRepository(Store);
    const priceLevelRepo = event.manager.getRepository(PriceLevel);
    const quantityRepo = event.manager.getRepository(Quantity);

    const priceLevels = await priceLevelRepo.find();
    const stores = await storeRepo.find();

    for (const priceLevel of priceLevels) {
      await priceRepo.save({
        cost: 11111111,
        price: 11111111,
        sku,
        priceLevel,
      });
    }

    for (const store of stores) {
      await quantityRepo.save({
        quantity: 11111111,
        store,
        sku,
      });
    }
  }
}
