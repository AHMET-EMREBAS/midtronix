import {
  Column,
  Entity,
  ManyRelation,
  OneRelation,
  OwnerRelation,
  Type,
} from '@mdtx/core';
import { NameEntity, ProductCommonEntity, BaseEntity } from './__base';
import {
  IPrice,
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
export class PriceLevel extends NameEntity {}

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
  @OwnerRelation(Product)
  product!: Product;
}

/**
 * @param price
 * @param cost
 * @param sku
 */
@Entity()
export class Price extends BaseEntity implements IPrice<Sku, PriceLevel> {
  @Column({ type: 'numeric', nullable: true }) price!: number;
  @Column({ type: 'numeric', nullable: true }) cost!: number;
  @OwnerRelation(PriceLevel) priceLevel!: PriceLevel;
  @OwnerRelation(Sku) sku!: Sku;
}
/**
 * @param quantity
 * @param sku
 * @param store
 */
@Entity()
export class Quantity extends BaseEntity implements IQuantity<Sku, Store> {
  @Column({ type: 'numeric', nullable: true }) quantity!: number;
  @OwnerRelation(Sku) sku!: Sku;
  @OwnerRelation(Store) store!: Store;
}

@Entity()
export class ProductImage
  extends ImageEntity(Product)
  implements IProductImage<Product> {}

@Entity()
export class ProductVideo
  extends VideoEntity(Product)
  implements IProductVideo<Product> {}

export const ProductEntities: Readonly<Type[]> = [
  Product,
  Manufacturer,
  Category,
  Department,
];

export const SkuEntities: Readonly<Type[]> = [...ProductEntities, Sku];

export const PriceEntities: Readonly<Type[]> = [
  Sku,
  Price,
  PriceLevel,
  ...ProductEntities,
];

export const QuantityEntities: Readonly<Type[]> = [
  ...ProductEntities,
  Store,
  Sku,
  Quantity,
];

export const ProductImageEntities: Readonly<Type[]> = [
  ...ProductEntities,
  ProductImage,
];

export const ProductVideoEntities: Readonly<Type[]> = [
  ...ProductEntities,
  ProductVideo,
];
