import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  ParseIntPipe,
  InjectRepository,
  Repository,
  Body,
  AddRelationDto,
  UnsetRelationDto,
  SetRelationDto,
  RemoveRelationDto,
  ApiTags,
  ValidationPipe,
  Query,
  PaginatorDto,
  RestRouteBuilder,
} from '@mdtx/core';
import { CreateProductDto, Product, UpdateProductDto } from '@mdtx/database';

const R = RestRouteBuilder.get('Product');

@R.Controler()
export class ProductController {
  constructor(
    @InjectRepository(Product)
    protected readonly repo: Repository<Product>
  ) {}

  @R.SaveOne()
  saveProduct(@Body(ValidationPipe) product: CreateProductDto) {
    return this.repo.save(product);
  }

  @R.FindAll()
  findProducts(@Query(ValidationPipe) paginator: PaginatorDto) {
    return this.repo.find({ ...paginator });
  }

  @R.FindOneById()
  findProductById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findOneBy({ id });
  }

  @R.DeleteOne()
  deleteProductById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.delete(id);
  }

  @R.UpdateOne()
  updateProductById(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) body: UpdateProductDto
  ) {
    return this.repo.update(id, body);
  }

  @R.AddRelation()
  addRelationToProduct(@Param(ValidationPipe) relationDto: AddRelationDto) {
    const { id, relationId, relationName } = relationDto;
    return this.repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .add(relationId);
  }

  @R.RemoveRelation()
  removeRelationToProduct(
    @Param(ValidationPipe) relationDto: RemoveRelationDto
  ) {
    const { id, relationId, relationName } = relationDto;
    return this.repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .remove(relationId);
  }

  @R.SetRelation()
  setRelationToProduct(@Param(ValidationPipe) relationDto: SetRelationDto) {
    const { id, relationId, relationName } = relationDto;
    return this.repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(relationId);
  }

  @R.UnsetRelation()
  unsetRelationToProduct(@Param(ValidationPipe) relationDto: UnsetRelationDto) {
    const { id, relationName } = relationDto;
    return this.repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(null);
  }
}
