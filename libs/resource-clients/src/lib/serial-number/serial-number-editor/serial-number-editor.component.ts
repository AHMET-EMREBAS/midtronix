import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product';
import {
  CommonFormModule,
  InputAutocompleteComponent,
  InputTextComponent,
} from '@mdtx/material/form';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  firstValueFrom,
} from 'rxjs';
import { IProduct, ISerialNumberView } from '@mdtx/models';
import {
  SerialNumberService,
  SerialNumberViewService,
} from '../serial-number.routes';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { QueryOperator, createQuery, createQueryValue } from '@mdtx/utils';

@Component({
  selector: 'mdtx-serial-number-editor',
  standalone: true,
  imports: [
    CommonModule,
    CommonFormModule,
    MatSnackBarModule,
    InputAutocompleteComponent,
    InputTextComponent,
    MatChipsModule,
  ],
  templateUrl: './serial-number-editor.component.html',
  styleUrl: './serial-number-editor.component.scss',
})
export class SerialNumberEditorComponent implements AfterViewInit {
  productControl = new FormControl<IProduct | null>(null, []);
  serialControl = new FormControl<string>('', []);
  productList = new BehaviorSubject<IProduct[]>([]);

  serialNumbers: Observable<ISerialNumberView[]> =
    this.serialViewService.entities$;

  constructor(
    protected readonly productService: ProductService,
    protected readonly serialService: SerialNumberService,
    protected readonly serialViewService: SerialNumberViewService,
    protected readonly snackbar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.productControl.valueChanges
      .pipe(debounceTime(600))
      .subscribe(async (search) => {
        if (typeof search === 'string') {
          const result = await firstValueFrom(
            this.productService.findAll({ search: search, take: 10 })
          );
          this.productList.next(result);
        }

        if (typeof search !== 'string') {
          this.serialViewService.findAll({ search: search?.upc });
        }
      });
  }

  async addSerialNumber() {
    const serialNumber = this.serialControl.value;
    const product = this.productControl.value;

    if (serialNumber && product) {
      try {
        await firstValueFrom(
          this.serialService.saveOne({
            serialNumber,
            product,
            status: 'in stock',
            active: true,
            notes: '',
          })
        );
        this.serialControl.reset();

        this.snackbar.open('Added a serial number', undefined, {
          panelClass: 'success-snackbar',
          duration: 3000,
        });

        this.serialViewService.findAll({
          upc: createQueryValue({
            operator: QueryOperator.EQUAL,
            value: product.upc,
          }),
        });
      } catch (err) {
        this.snackbar.open((err as any).message, undefined, {
          panelClass: 'error-snackbar',
          duration: 3000,
        });
      }
    }
  }
}
