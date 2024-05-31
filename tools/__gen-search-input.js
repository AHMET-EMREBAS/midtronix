const { execSync } = require('child_process');

const rns = [
  'category',
  'customer',
  'department',
  'manufacturer',
  'role',
  'permission',
  'product',
  'sku-view',
  'project',
  'sprint',
  'store',
  'task',
  'ticket',
  'price-level',
];

for (const r of rns) {
  execSync(`npx nx g @mdtx/gen:search-input ${r}`);
}
