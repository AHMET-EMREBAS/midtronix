const { execSync } = require('child_process');

const rns = [
  'address',
  'category',
  'customer',
  'department',
  'email',
  'manufacturer',
  'permission',
  'phone',
  'price-level',
  'product',
  'role',
  'sample',
  'store',
  'supplier',
  'user',
];

for (const r of rns) {
  execSync(`npx nx g @mdtx/gen:client ${r}`);
}
