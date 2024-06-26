import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
  SearchDto,
} from '@mdtx/core';
import {
  CreateProductDto,
  Product,
  SearchProductDto,
  UpdateProductDto,
} from '@mdtx/database';
import { ProductService } from './product.service';

const R = RestRouteBuilder.get('Product');

@R.Controler()
export class ProductController {
  constructor(protected readonly service: ProductService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateProductDto) {
    return this.service.save(body);
  }

  @R.FindAll()
  findAll(
    @R.Query() paginator: PaginatorDto,
    @R.Query() searchDto: SearchProductDto
  ) {
    return this.service.findAll({ ...paginator }, null, null, searchDto.search);
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateProductDto) {
    console.log(body);
    // manufacturers
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToProduct(@R.Param() param: RelationDto<Product>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Product>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Product>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Product>) {
    return this.service.unsetRelation(param);
  }
}
