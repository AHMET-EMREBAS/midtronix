import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartFormComponent } from '@mdtx/forms';
import { ICart } from '@mdtx/common';
import { CartService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-cart',
  standalone: true,
  imports: [CommonModule, CartFormComponent],
  templateUrl: './create-cart.component.html',
  styleUrl: './create-cart.component.scss',
  providers: [CartService],
})
export class CreateCartComponent {
  constructor(protected readonly service: CartService) {}
  handleSubmit(cart: ICart) {
    this.service.add(cart);
  }
}
