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
  constructor(protected readonly service: CategoryService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateCategoryDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateCategoryDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToCategory(@R.Param() param: RelationDto<Category>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Category>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Category>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Category>) {
    return this.service.unsetRelation(param);
  }
}
