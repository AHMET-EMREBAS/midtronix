import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
} from '@mdtx/core';
import { Template } from './template.entity';

@EventSubscriber()
export class TemplateSubscriber implements EntitySubscriberInterface<Template> {
  listenTo() {
    return Template;
  }

  afterInsert(event: InsertEvent<Template>): void | Promise<any> {
    //  TODO
    console.debug('After Insert : ', event.entity);
  }

  afterUpdate(event: UpdateEvent<Template>): void | Promise<any> {
    // TODO:
    console.debug('After Update : ', event.entity);
  }
}
