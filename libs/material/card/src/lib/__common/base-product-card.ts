import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({ template: '' })
export class BaseProductCardComponent {
  @Input() productName = 'No Product Name';
  @Input() productBarcode = 'No Barcode';
  @Input() productUnitPrice = -100;
  @Input() productQuantity = -100;
  @Input() productSubtotal = -100;
  @Input() productTotal = -100;
  @Input() productDescription = 'Product description';
  @Input() productImage = './assets/imgs/placeholder.svg';
  @Output() addToCartEvent = new EventEmitter();
}
