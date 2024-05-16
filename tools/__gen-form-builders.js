const { execSync } = require('child_process');

const rns = [
  'category',
  'customer-address',
  'customer-email',
  'customer-phone',
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
  execSync(`npx nx g @mdtx/gen:form-builder ${r}`);
}
