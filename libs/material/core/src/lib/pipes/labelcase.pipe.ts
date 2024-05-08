import { Pipe, PipeTransform } from '@angular/core';
import { names } from '@mdtx/utils';

@Pipe({
  name: 'labelcase',
  standalone: true,
})
export class LabelcasePipe implements PipeTransform {
  transform(value: string): string {
    return names(value).titleName;
  }
}
