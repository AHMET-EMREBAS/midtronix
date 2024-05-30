import { IOrderView, ISale } from '@mdtx/common';

export function __printOrder(order: IOrderView) {
  return `
  <div class="item">
    <div class="cell">${order.quantity}X</div>
    <div class="cell">${order.name}</div>
    <div class="cell">$${order.unitPrice}</div>
  </div>
    `;
}

export function __printOrders(orders: IOrderView[]) {
  return orders.map((e) => __printOrder(e)).join('');
}

export function __printToltalPrice(sale: ISale) {
  return `
    <div class="total-price subtotal">
          <strong>Tax:</strong>
          <span> $${((sale.taxrate * sale.subtotal) / 100).toFixed(2)} </span>
    </div>
    <div class="total-price subtotal">
        <strong>Subtotal:</strong>
        <span> $${sale.subtotal.toFixed(2)} </span>
    </div>
    <div class="total-price total">
        <strong>Total:</strong>
        <span> $${sale.total.toFixed(2)}</span>
    </div>
        `;
}

export const receiptTemplate = (sale: ISale, orders: IOrderView[]) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recipt Template</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body,
      html {
        padding: 0px;
        margin: 0px;
      }

      h1 {
        padding: 0px;
        margin: 0px;
      }
      body {
        font-family: monospace;
        font-size: 14px;
        overflow: hidden;
        max-width: 75mm;
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 1em;
        border: 3px dashed orange;
        color: black;
        border-radius: 1em;
      }

      .headers {
        display: flex;
        flex-direction: row;
        gap: 1em;
        font-weight: bolder;
        border-bottom: 3px dashed gray;
        padding-bottom: 0.5em;
      }

      .items {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        margin-top: 1em;
      }

      .item {
        display: flex;
        flex-direction: row;
        gap: 1em;
        border-bottom: 1px dashed rgb(170, 170, 170);
      }

      .item > .cell:first-child {
        font-weight: bold;
      }

      .cell:first-child {
        width: 10%;
      }

      .cell:nth-child(2) {
        width: 45%;
      }
      .cell:last-child {
        width: 35%;
        text-align: right;
      }

      img {
        width: 50%;
        margin: auto;
        margin-bottom: 3em;
      }

      .total-prices {
        display: flex;
        flex-direction: column;
        border-top: 3px dashed gray;
        padding-top: 1em;
        padding-bottom: 1em;
        gap: 0.5em;
      }

      .total-price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    </style>
  </head>
  <body>
    <h1 style="text-align: center">Midtronix</h1>
    <img src="./assets/icons/icon-128x128.png" />

    <div class="headers">
      <div class="cell header">#</div>
      <div class="cell header">Name</div>
      <div class="cell header">Price</div>
    </div>

    <div class="items">
      ${__printOrders(orders)}
      <div class="total-prices">
        ${__printToltalPrice(sale)}
      </div>
    </div>
  </body>
</html>



`;
