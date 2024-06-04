const { execSync } = require('child_process');

const customer = [
  'customer',
  'customer-view',

  'customer-role',
  'customer-permission',
  'customer-address',
  'customer-email',
  'customer-phone',
];

const user = [
  'user-address',
  'user-email',
  'user-phone',
  'user',
  'role',
  'permission',
];

const inventory = [
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
  'cart',
  'order',
  'order-view',
  'sale',
  'sale-view',
];

const project = ['project', 'sprint', 'task'];

const message = ['message', 'notification'];

const all = [...customer, ...user, ...inventory, ...project, ...message];

for (const r of all) {
  execSync(`npx nx g @mdtx/gen:search-input ${r}`);
}
