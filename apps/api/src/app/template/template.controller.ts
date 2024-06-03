import { InjectRepository, Repository } from '@mdtx/core';

import { RestRouteBuilder } from '@mdtx/core';
import {
  CreateTemplateDto,
  QueryTemplateDto,
  Template,
  TemplateView,
  UpdateTemplateDto,
} from '@mdtx/entity';

const R = RestRouteBuilder.get('Template');

@R.Controler()
export class TemplateController {
  constructor(
    @InjectRepository(Template) protected readonly repo: Repository<Template>,
    @InjectRepository(TemplateView)
    protected readonly viewRepo: Repository<TemplateView>
  ) {}

  @R.Metadata()
  async metadata() {
    const result = {
      count: await this.repo.count(),
    };
    console.debug('Metadata Template : ', result);
    return result;
  }

  @R.SaveOne()
  async save(@R.Body() body: CreateTemplateDto) {
    console.debug('Save Template : ', body);
    return await this.repo.save(body);
  }

  @R.FindAll()
  findAll(@R.Query() query: QueryTemplateDto) {
    console.debug('Query Template : ', query);
    return this.viewRepo.find({ ...query });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    console.debug('Find One By Id : ', id);
    return this.repo.findOneBy({ id });
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    console.debug('Delete One By Id : ', id);
    return this.repo.softDelete(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateTemplateDto) {
    console.debug('Delete One By Id : ', id, body);
    return this.repo.update(id, body);
  }
}
