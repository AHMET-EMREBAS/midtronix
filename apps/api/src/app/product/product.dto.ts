import { IProduct } from '@mdtx/common';
import { Exclude, IDDto } from '@mdtx/core';

@Exclude()
export class CreateProductDto
  implements Partial<IProduct<IDDto, IDDto, IDDto>>
{
  name: string;
  description: string;
  upc: string;
  category: IDDto;
  department: IDDto;
  manufacturers?: IDDto[];
}
