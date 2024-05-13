import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateCategoryDto, Category, UpdateCategoryDto } from '@mdtx/database';
import { CategoryService } from './category.service';

const R = RestRouteBuilder.get('Category');

@R.Controler()
export class CategoryController {
  constructor(protected readonly categoryService: CategoryService) {}

  @R.SaveOne()
  save(@R.Body() category: CreateCategoryDto) {
    return this.categoryService.save(category);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.categoryService.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.categoryService.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.categoryService.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateCategoryDto) {
    return this.categoryService.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCategory(@R.Param() relationDto: RelationDto<Category>) {
    return this.categoryService.addRelation(relationDto);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() relationDto: RelationDto<Category>) {
    return this.categoryService.removeRelation(relationDto);
  }

  @R.SetRelation()
  setRelation(@R.Param() relationDto: RelationDto<Category>) {
    return this.categoryService.setRelation(relationDto);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() relationDto: UnsetRelationDto<Category>) {
    return this.categoryService.unsetRelation(relationDto);
  }
}
