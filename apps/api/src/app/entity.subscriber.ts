import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

@EventSubscriber()
export class EntitySubscriber implements EntitySubscriberInterface {
  afterInsert(event: InsertEvent<any>): void | Promise<any> {
    // console.log(
    //   `${event.metadata.targetName.toLowerCase()}.created`,
    //   event.entity
    // );
  }
}
