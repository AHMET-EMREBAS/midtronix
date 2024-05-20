/* eslint-disable @nx/enforce-module-boundaries */
import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as JsBarcode from 'jsbarcode';
@Component({
  selector: 'mdtx-barcode-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barcode-view.component.html',
  styleUrl: './barcode-view.component.scss',
})
export class BarcodeViewComponent implements AfterViewInit {
  @Input() barcode!: string;

  ngAfterViewInit(): void {
    JsBarcode(`#b${this.barcode}`, this.barcode);
  }
}
