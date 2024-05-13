import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateProductImageDto,
  ProductImage,
  UpdateProductImageDto,
} from '@mdtx/database';
import { ProductImageService } from './product-image.service';

const R = RestRouteBuilder.get('ProductImage');

@R.Controler()
export class ProductImageController {
  constructor(protected readonly service: ProductImageService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateProductImageDto) {
    return this.service.save(body);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.service.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.service.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(
    @R.ParamID() id: number,
    @R.Body() body: UpdateProductImageDto
  ) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToProductImage(@R.Param() param: RelationDto<ProductImage>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<ProductImage>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<ProductImage>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<ProductImage>) {
    return this.service.unsetRelation(param);
  }
}
