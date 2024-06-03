import { ITemplateView } from '@mdtx/interface';
import { ViewEntity, ViewColumn, BaseView } from '@mdtx/core';
import { Template } from './template.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'templateId')
      .addSelect('main.name', 'name')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .from(Template, 'main');
  },
})
export class TemplateView extends BaseView implements ITemplateView {
  @ViewColumn() templateId!: string;
  @ViewColumn() name!: string;
}
