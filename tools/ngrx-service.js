const { execSync } = require('child_process');

export const customer = [
  'customer',
  'customer-view',

  'customer-role',
  'customer-permission',
  'customer-address',
  'customer-email',
  'customer-phone',
];

export const user = [
  'user-address',
  'user-email',
  'user-phone',
  'user',
  'role',
  'permission',
];

export const inventory = [
  'product',
  'product-view',

  'sku',
  'sku-view',

  'category',
  'department',

  'price-level',
  'price',
  'quantity',

  'manufacturer',
  'supplier',

  'store',
];

export const project = ['project', 'sprint', 'task'];

export const message = ['message', 'notification'];

for (const r of [...customer, ...user, ...inventory, ...project, ...message]) {
  execSync(`npx nx g @mdtx/gen:ngrx-service ${r}`);
}
