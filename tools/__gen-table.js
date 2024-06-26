const { execSync } = require('child_process');

const rns = [
  'cart',
  'category',
  'customer-account',
  'customer-address',
  'customer-email',
  'customer-phone',
  'customer-role',
  'customer-permission',

  'customer',
  'department',
  'manufacturer',
  'message',
  'notification',
  'permission',
  'price-level',
  'price',
  'product-image',
  'product-video',
  'product',
  'project',
  'quantity',
  'role',
  'sku',
  'sku-view',
  'sprint',
  'store',
  'task',
  'ticket',
  'user-address',
  'user-email',
  'user-phone',
  'user',
];

for (const r of rns) {
  execSync(`npx nx g @mdtx/gen:table ${r}`);
}
