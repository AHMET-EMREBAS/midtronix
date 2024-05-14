import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import {
  CreateProductVideoDto,
  ProductVideo,
  UpdateProductVideoDto,
} from '@mdtx/database';
import { ProductVideoService } from './product-video.service';

const R = RestRouteBuilder.get('ProductVideo');

@R.Controler()
export class ProductVideoController {
  constructor(protected readonly service: ProductVideoService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateProductVideoDto) {
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
    @R.Body() body: UpdateProductVideoDto
  ) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToProductVideo(@R.Param() param: RelationDto<ProductVideo>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<ProductVideo>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<ProductVideo>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<ProductVideo>) {
    return this.service.unsetRelation(param);
  }
}
