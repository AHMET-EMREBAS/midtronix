import { InjectRepository, Repository, RepositoryService } from '@mdtx/core';
import { Injectable } from '@nestjs/common';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginatorDto, RestRouteBuilder } from '@mdtx/core';
import {
  CreateTemplateDto,
  SearchTemplateDto,
  SortTemplateDto,
  Template,
  TemplateView,
  UpdateTemplateDto,
} from '@mdtx/entity';

const R = RestRouteBuilder.get('Template');

@Injectable()
export class TemplateService extends RepositoryService<Template> {
  constructor(@InjectRepository(Template) repo: Repository<Template>) {
    super(repo);
  }
}
@R.Controler()
export class TemplateController {
  constructor(protected readonly service: TemplateService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateTemplateDto) {
    return this.service.save(body);
  }

  @R.FindAll()
  findAll(
    @R.Query() paginator: PaginatorDto,
    @R.Query() sort: SortTemplateDto,
    @R.Query() search: SearchTemplateDto
  ) {
    return this.service.findAll(
      { ...paginator },
      undefined,
      undefined,
      search,
      sort
    );
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateTemplateDto) {
    return this.service.updateOneById(id, body);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Template, TemplateView])],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
