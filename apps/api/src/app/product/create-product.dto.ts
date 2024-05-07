import { ICreateProductDto, IID } from '@mdtx/common';
import { Exclude, ObjectIdProperty, Property } from '@mdtx/core';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateProductDto implements ICreateProductDto {
  @Property({ type: 'string' }) name: string;
  @Property({ type: 'string' }) upc: string;
  @Property({ type: 'string' }) description: string;
  @ObjectIdProperty() category: IID;
  @ObjectIdProperty() department: IID;
  @ObjectIdProperty({ isArray: true }) manufacturers?: IID[];
}

@Exclude()
export class UpdateProductDto extends PartialType(CreateProductDto) {}