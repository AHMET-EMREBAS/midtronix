import { Exclude } from 'class-transformer';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Property } from '../property';

@Exclude()
export class DeleteResultDto implements Pick<DeleteResult, 'affected'> {
  @Property({ type: 'number', noValidate: true }) affected?: number | null;
}

@Exclude()
export class UpdateResultDto implements Pick<UpdateResult, 'affected'> {
  @Property({ type: 'number', noValidate: true }) affected?: number;
}
