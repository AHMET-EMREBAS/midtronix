import { ICartRaw, ICreateCartDto } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { CART_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class CartService extends CollectionBaseService<ICartRaw> {
  static readonly ENTITY_NAME = 'Cart';
  static readonly ENTITY_PLURAL_NAME = 'Carts';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Cart', factory, httpClient, CART_OPTION_COLUMN);
  }

  addCart(cart: ICreateCartDto) {
    return super.add(cart);
  }
}
