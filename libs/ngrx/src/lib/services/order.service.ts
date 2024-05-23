import { ICreateOrderDto, IOrderRaw } from '@mdtx/common';
import { CollectionBaseService } from '../__base';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { ORDER_OPTION_COLUMN } from '../option-columns';

@Injectable()
export class OrderService extends CollectionBaseService<IOrderRaw> {
  static readonly ENTITY_NAME = 'Order';
  static readonly ENTITY_PLURAL_NAME = 'Orders';

  constructor(
    factory: EntityCollectionServiceElementsFactory,
    httpClient: HttpClient
  ) {
    super('Order', factory, httpClient, ORDER_OPTION_COLUMN);
  }

  addOrder(order: ICreateOrderDto) {
    return super.add(order);
  }

  deleteOrder(orderId: number) {
    return super.delete(orderId);
  }
}
