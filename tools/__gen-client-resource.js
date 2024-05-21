const { execSync } = require('child_process');

const rns = [
  'cart',
  'category',
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
  'product-image',
  'product-video',
  'product',
  'project',
  'role',
  'sku',
  'sprint',
  'store',
  'task',
  'ticket',
  'user-address',
  'user-email',
  'user-phone',
  'user',
  'price-level',
  'price',
  'quantity',
];

for (const r of rns) {
  execSync(`npx nx g @mdtx/gen:client-resource ${r}`);
}
