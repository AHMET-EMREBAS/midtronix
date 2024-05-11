import {
  ICreatePriceDto,
  ICreatePriceLevelDto,
  ICreateProductDto,
  ICreateQuantityDto,
  ICreateSkuDto,
  ICreateStoreDto,
  IID,
} from '@mdtx/common';
import {
  Exclude,
  IDDto,
  IDObjectProperty,
  Property,
  PartialType,
  PickType,
} from '@mdtx/core';
import { CreateDescriptionDto, CreateNameDto } from './__base.dto';

@Exclude()
export class CreatePriceLevelDto
  extends CreateNameDto
  implements ICreatePriceLevelDto {}

@Exclude()
export class UpdatePriceLevelDto extends CreatePriceLevelDto {}

@Exclude()
export class CreateProductDto
  extends CreateDescriptionDto
  implements ICreateProductDto
{
  @Property({ type: 'string' }) upc!: string;
  @IDObjectProperty({ objectType: IDDto }) category!: IID;
  @IDObjectProperty({ objectType: IDDto }) department!: IID;
  @IDObjectProperty({ objectType: IDDto, isArray: true }) manufacturers?: IID[];
}

@Exclude()
export class UpdateProductDto extends PartialType(CreateProductDto) {}

@Exclude()
export class CreateSkuDto
  extends PickType(CreateProductDto, ['name', 'description'])
  implements ICreateSkuDto
{
  @Property({ type: 'string', required: true, format: 'barcode' })
  upc!: string;

  @IDObjectProperty({ required: true })
  product!: IID;
}

@Exclude()
export class UpdateSkuDto extends PartialType(CreateSkuDto) {}

@Exclude()
export class CreatePriceDto implements ICreatePriceDto {
  @Property({ type: 'number', minimum: 0 }) price!: number;
  @Property({ type: 'number', minimum: 0 }) cost!: number;
  @IDObjectProperty({ required: true }) priceLevel!: IID;
  @IDObjectProperty({ required: true }) sku!: IID;
}

@Exclude()
export class UpdatePriceDto extends PartialType(CreatePriceDto) {}

@Exclude()
export class CreateQuantityDto implements ICreateQuantityDto {
  @Property({ type: 'number', required: true }) quantity!: number;
  @IDObjectProperty({ required: true }) sku!: IID;
  @IDObjectProperty({ required: true }) store!: IID;
}

@Exclude()
export class UpdateQuantityDto extends PickType(CreateQuantityDto, [
  'quantity',
]) {}
