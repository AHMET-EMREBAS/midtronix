const { execSync } = require('child_process');

const rns = [
  ['category', `'id','name'`],
  ['customer-address', `'id','street','city','state','country','zip'`],
  ['customer-email', '`id`,`email`'],
  ['customer-phone', `'id','phone'`],
  ['customer', `'id','username'`],
  ['department', `'id','name'`],
  ['manufacturer', `'id','name','description'`],
  ['message', `'id','message'`],
  ['notification', `'id','message'`],
  ['permission', `'id','name'`],
  ['product-image', `'id','name','url'`],
  ['product-video', `'id','name','url'`],
  ['product', `'id','name','description','upc'`],
  ['project', `'id','name','description'`],
  ['role', `'id','name'`],
  ['sku', `'id','name','description','upc'`],
  ['sprint', `'id','name'`],
  ['store', `'id','name'`],
  [
    'task',
    `'id','name','description','due','startDate','finishDate','difficulty','status'`,
  ],
  [
    'ticket',
    `'id','name','description','due','startDate','finishDate','difficulty','status'`,
  ],
  ['user-address', `'id','street','city','state','country','zip'`],
  ['user-email', `'id','email'`],
  ['user-phone', `'id','phone'`],
  ['user', `'id','username'`],
];

for (const [r, f] of rns) {
  execSync(`npx nx g @mdtx/gen:table-option ${r} ${f}`);
}
