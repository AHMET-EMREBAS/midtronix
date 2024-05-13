import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateProductDto, Product, UpdateProductDto } from '@mdtx/database';
import { ProductService } from './product.service';

const R = RestRouteBuilder.get('Product');

@R.Controler()
export class ProductController {
  constructor(protected readonly productService: ProductService) {}

  @R.SaveOne()
  save(@R.Body() product: CreateProductDto) {
    return this.productService.save(product);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.productService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.productService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.productService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateProductDto) {
    return this.productService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToProduct(@R.Param() relationDto: RelationDto<Product>) {
    return this.productService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<Product>) {
    return this.productService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<Product>) {
    return this.productService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<Product>) {
    return this.productService.unsetRelation(relationDto);
  }
}
