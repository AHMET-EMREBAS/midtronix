import {
  ICreatePriceDto,
  ICreatePriceLevelDto,
  ICreateProductDto,
  ICreateQuantityDto,
  ICreateSkuDto,
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
import { CreateImageDto, CreateVideoDto } from './media.dto';

@Exclude()
export class CreatePriceLevelDto
  extends CreateNameDto
  implements ICreatePriceLevelDto
{
  @Property({ type: 'number', minimum: 0 }) taxrate!: number;
}

@Exclude()
export class UpdatePriceLevelDto extends PartialType(CreatePriceLevelDto) {}

@Exclude()
export class CreateProductDto
  extends CreateDescriptionDto
  implements ICreateProductDto
{
  @Property({ type: 'string' }) upc!: string;
  @IDObjectProperty({ objectType: IDDto, default: { id: 1 } }) category!: IID;
  @IDObjectProperty({ objectType: IDDto, default: { id: 1 } }) department!: IID;
  @IDObjectProperty({ objectType: IDDto, isArray: true, default: [{ id: 1 }] })
  manufacturers?: IID[];
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
export class UpdatePriceDto extends PickType(CreatePriceDto, [
  'price',
  'cost',
]) {}

@Exclude()
export class CreateQuantityDto implements ICreateQuantityDto {
  @Property({ type: 'number', required: true }) quantity!: number;
  @IDObjectProperty({ required: true }) sku!: IID;
  @IDObjectProperty({ required: true }) store!: IID;
}

@Exclude()
export class UpdateQuantityDto extends PartialType(
  PickType(CreateQuantityDto, ['quantity'])
) {}

@Exclude()
export class CreateProductImageDto extends CreateImageDto {}
@Exclude()
export class UpdateProductImageDto extends PartialType(CreateProductImageDto) {}
@Exclude()
export class CreateProductVideoDto extends CreateVideoDto {}
@Exclude()
export class UpdateProductVideoDto extends PartialType(CreateProductVideoDto) {}
