import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateMessageDto, Message, UpdateMessageDto } from '@mdtx/database';
import { MessageService } from './message.service';

const R = RestRouteBuilder.get('Message');

@R.Controler()
export class MessageController {
  constructor(protected readonly service: MessageService) {}

  @R.Metadata()
  metadata() {
    return this.service.metadata();
  }

  @R.SaveOne()
  save(@R.Body() body: CreateMessageDto) {
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
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateMessageDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToMessage(@R.Param() param: RelationDto<Message>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Message>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Message>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Message>) {
    return this.service.unsetRelation(param);
  }
}
