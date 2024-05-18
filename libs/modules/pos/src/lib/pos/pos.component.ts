import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISkuViewRaw } from '@mdtx/common';
import { SkuViewService } from '@mdtx/ngrx';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { catchError, debounceTime, map, of, switchMap, tap } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'mdtx-pos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
})
export class PosComponent {
  storeId = 1;
  priceLevelId = 1;
  __items = new Map<string, ISkuViewRaw>();

  barcodeControl = new FormControl('', []);
  findItemByBarcode$ = this.barcodeControl.valueChanges.pipe(
    debounceTime(1000),
    switchMap((barcodeValue) => {
      if (barcodeValue) {
        return this.httpClient
          .get<ISkuViewRaw>(
            `api/skuview/?storeId=${this.storeId}&priceLevelId=${this.priceLevelId}&barcode=${barcodeValue}`
          )
          .pipe(
            debounceTime(1000),
            tap((data: ISkuViewRaw) => {
              const found = this.__items.get(data.barcode);
              if (found) {
                found.quantity++;
                found.total = found.quantity * found.price;
              } else {
                this.__items.set(data.barcode, {
                  ...data,
                  quantity: 1,
                  total: data.price,
                });
              }
              this.barcodeControl.setValue('');
            }),
            catchError(() => {
              return of(null);
            })
          );
      }
      return of(null);
    })
  );

  constructor(protected readonly httpClient: HttpClient) {}

  getItems() {
    return [...this.__items.entries()].map(([, value]) => value);
  }
  keyupHandler(event: KeyboardEvent) {
    console.log(event);
    SkuViewService;
  }
}
