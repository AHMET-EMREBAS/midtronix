const { execSync } = require('child_process');

const rns = [
  ['category', 'name'],
  ['customer-address', 'street'],
  ['customer-email', 'email'],
  ['customer-phone', 'phone'],
  ['customer', 'username'],
  ['department', 'name'],
  ['manufacturer', 'name'],
  ['message', 'message'],
  ['notification', 'message'],
  ['permission', 'name'],
  ['product-image', 'name'],
  ['product-video', 'name'],
  ['product', 'name'],
  ['project', 'name'],
  ['role', 'name'],
  ['sku', 'name'],
  ['sprint', 'name'],
  ['store', 'name'],
  ['task', 'name'],
  ['ticket', 'name'],
  ['user-address', 'street'],
  ['user-email', 'email'],
  ['user-phone', 'phone'],
  ['user', 'username'],
];

for (const [r, c] of rns) {
  execSync(`npx nx g @mdtx/gen:option-column ${r} ${c}`);
}
