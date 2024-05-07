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
  QueryDto,
} from '@mdtx/core';
import { Product } from '@mdtx/database';

@ApiTags(ProductController.name)
@Controller()
export class ProductController {
  constructor(
    @InjectRepository(Product)
    protected readonly repo: Repository<Product>
  ) {}

  @Post('product')
  saveProduct(@Body(ValidationPipe) product: Product) {
    return this.repo.save(product);
  }

  @Get('products')
  findProducts(
    @Query(ValidationPipe) paginator: PaginatorDto,
    @Query() query: QueryDto
  ) {
    return this.repo.find({ ...paginator, where: query.search });
  }

  @Get('product/:id')
  findProductById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findOneBy({ id });
  }

  @Delete('product/:id')
  deleteProductById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.delete(id);
  }

  @Put('product/:id')
  updateProductById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Product
  ) {
    return this.repo.update(id, body);
  }

  @Put('product/:id/:relationName/:relationId')
  addRelationToProduct(@Param() relationDto: AddRelationDto) {
    const { id, relationId, relationName } = relationDto;
    return this.repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .add(relationId);
  }

  @Delete('product/:id/:relationName/:relationId')
  removeRelationToProduct(@Param() relationDto: RemoveRelationDto) {
    const { id, relationId, relationName } = relationDto;
    return this.repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .remove(relationId);
  }

  @Post('product/:id/:relationName/:relationId')
  setRelationToProduct(@Param() relationDto: SetRelationDto) {
    const { id, relationId, relationName } = relationDto;
    return this.repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(relationId);
  }

  @Delete('product/:id/:relationName')
  unsetRelationToProduct(@Param() relationDto: UnsetRelationDto) {
    const { id, relationName } = relationDto;
    return this.repo
      .createQueryBuilder()
      .relation(relationName)
      .of(id)
      .set(null);
  }
}
