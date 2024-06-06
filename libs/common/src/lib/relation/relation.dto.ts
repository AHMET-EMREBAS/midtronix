export interface IRelationDto {
  id: number;
  relationName: string;
  relationId: number;
}

export type IUnsetRelationDto = Omit<IRelationDto, 'relationId'>;
