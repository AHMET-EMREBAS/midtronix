const { execSync } = require('child_process');

function __format(fields = []) {
  return fields.map((e) => `{ name: '${e}' }`).join(', ');
}

const rns = [
  ['category', __format(['name'])],
  [
    'customer-address',
    [
      __format(['street', 'city', 'state', 'country', 'zip']),
      `{name:'owner', map:(v:ICustomerAddress)=>v.owner.username}`,
    ].join(', '),
  ],
  [
    'customer-email',
    [
      __format(['email']),
      `{name: 'customer', map:(v:ICustomerEmail)=>v.owner.username }`,
    ].join(','),
  ],
  [
    'customer-phone',
    [
      __format(['phone']),
      `{name: 'customer', map:(v:ICustomerEmail)=>v.owner.username}`,
    ].join(','),
  ],
  [
    'customer',
    [
      __format(['username']),
      `{name:'roles', map:(v:ICustomer)=>v.roles?.map(e=>e.name).join(',')}`,
    ].join(', '),
  ],
  ['department', __format(['name'])],
  ['manufacturer', __format(['name', 'description'])],
  [
    'message',
    [
      __format(['message']),
      `{name:'source', label:"From", map:(v:IMessage)=>v.source?.username}`,
      `{name:'target', label:"To", map:(v:IMessage)=>v.target?.username}`,
    ].join(','),
  ],
  [
    'notification',
    [
      __format(['message']),
      `{name:'source', label:"From", map:(v:IMessage)=>v.source?.username}`,
      `{name:'target', label:"To", map:(v:IMessage)=>v.target?.username}`,
    ].join(','),
  ],
  ['permission', __format(['name'])],
  ['product-image', [__format(['name', 'url'])]],
  ['product-video', [__format(['name', 'url'])]],
  [
    'product',
    [
      __format(['name', 'description']),
      `{name:'category', label:"category", map: (v:IProduct)=>v.category.name }`,
      `{name:'department', label:"department", map: (v:IProduct)=>v.department.name }`,
    ].join(','),
  ],
  ['project', __format(['name', 'description'])],
  [
    'role',
    [
      __format(['name']),
      `{name:'permissions', map:(e:IRole)=>e.permissions?.map(e=>e.name).join(', ')}`,
    ].join(','),
  ],
  [
    'sku',
    [
      __format(['name', 'description']),
      `{name:'product', map:(v:ISku)=>v.product.name}`,
      `{name:'productUpc', map:(v:ISku)=>v.product.upc}`,
      `{name:'category', map:(v:ISku)=>v.product.category.name}`,
      `{name:'department', map:(v:ISku)=>v.product.department.name}`,
    ].join(', '),
  ],
  [
    'sprint',
    [
      __format(['name']),
      `{name:'project', map:(v:ISprint)=>v.project?.name}`,
    ].join(','),
  ],
  ['store', __format(['name'])],
  [
    'task',
    [
      __format([
        'name',
        'description',
        'due',
        'startDate',
        'finishDate',
        'difficulty',
        'status',
      ]),
      `{name:'assignees', map:(v:ITask)=>v.assignees?.map(e=>e.username).join(', ')
  }`,
    ].join(','),
  ],
  [
    'ticket',
    [
      __format([
        'name',
        'description',
        'due',
        'startDate',
        'finishDate',
        'difficulty',
        'status',
      ]),
      `{name:'assignees', map:(v:ITask)=> v.assignees?.map(e=>e.username).join(', ') }`,
    ].join(','),
  ],
  [
    'user-address',
    [
      __format(['street', 'city', 'state', 'country', 'zip']),
      `{name:'owner', map:(v:ICustomerAddress)=>v.owner.username}`,
    ].join(', '),
  ],
  [
    'user-email',
    [
      __format(['email']),
      `{name: 'customer', map:(v:ICustomerEmail)=>v.owner.username }`,
    ].join(','),
  ],
  [
    'user-phone',
    [
      __format(['phone']),
      `{name: 'customer', map:(v:ICustomerEmail)=>v.owner.username}`,
    ].join(','),
  ],
  ['user', `'username'`],
  ['price-level', __format(['name'])],
  [
    'price',
    [
      `{name:'name',map:(v:IPrice)=>v.sku.name}`,
      `{name:'description',map:(v:IPrice)=>v.sku.description}`,
      `{name:'barcode',map:(v:IPrice)=>v.sku.upc}`,
      __format(['price', 'cost']),
    ].join(', '),
  ],
  [
    'quantity',
    [
      `{name:'name',map:(v:IPrice)=>v.sku.name}`,
      `{name:'description',map:(v:IPrice)=>v.sku?.description}`,
      `{name:'barcode', map:(v:IPrice)=>v.sku?.upc}`,
      `{name:'store', map:(v:IPrice)=>v.store?.name}`,
      __format(['quantity']),
    ].join(', '),
  ],
];

for (const [r, f] of rns) {
  execSync(`npx nx g @mdtx/gen:table-option ${r} "${f}"`);
}
