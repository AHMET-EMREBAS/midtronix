const { execSync } = require('child_process');

function __format(fields = []) {
  return fields.map((e) => `{ name: '${e}' }`).join(', ');
}

const rns = [
  ['category', __format(['name'])],
  [
    'customer-address',
    [
      `{ name: 'username', map:(v:ICustomerAddressRaw)=>v.owner?.username}`,
      __format(['street', 'city', 'state', 'country', 'zip']),
    ].join(', '),
  ],
  [
    'customer-email',
    [
      `{name: 'username', map:(v:ICustomerEmailRaw)=>v.owner?.username }`,
      __format(['email']),
    ].join(','),
  ],
  [
    'customer-phone',
    [
      __format(['phone']),
      `{name: 'owner', map:(v:ICustomerPhoneRaw)=>v.owner?.username}`,
    ].join(','),
  ],
  [
    'customer',
    [
      __format(['username']),
      `{name:'roles', map:(v:ICustomerRaw)=>v.roles?.map(e=>e.name).join(',')}`,
    ].join(', '),
  ],
  ['department', __format(['name'])],
  ['manufacturer', __format(['name', 'description'])],
  [
    'message',
    [
      __format(['message']),
      `{name:'source', label:'From', map:(v:IMessageRaw)=>v.source?.username}`,
      `{name:'target', label:'To', map:(v:IMessageRaw)=>v.target?.username}`,
    ].join(','),
  ],
  [
    'notification',
    [
      __format(['message']),
      `{name:'source', label:'From', map:(v:INotificationRaw)=>v.source?.username}`,
      `{name:'target', label:'To', map:(v:INotificationRaw)=>v.target?.username}`,
    ].join(','),
  ],
  ['permission', __format(['name'])],
  [
    'product-image',
    [
      __format(['name', 'url']),
      `{ name:'product', map:(v:IProductImageRaw)=> v.owner?.name}`,
    ],
  ],
  [
    'product-video',
    [
      __format(['name', 'url']),
      `{ name:'product', map:(v:IProductVideoRaw)=> v.owner?.name}`,
    ],
  ],
  [
    'product',
    [
      __format(['name', 'description']),
      `{name:'category', label:'category', map: (v:IProductRaw)=>v.category?.name }`,
      `{name:'department', label:'department', map: (v:IProductRaw)=>v.department?.name }`,
    ].join(','),
  ],
  ['project', __format(['name', 'description'])],
  [
    'role',
    [
      __format(['name']),
      `{name:'permissions', map:(e:IRoleRaw)=>e.permissions?.map(e=>e.name).join(', ')}`,
    ].join(','),
  ],
  [
    'sku',
    [
      __format(['name', 'description', 'upc']),
      `{name:'product', map:(v:ISkuRaw)=>v.product?.name}`,
      `{name:'category', map:(v:ISkuRaw)=>v.product?.category?.name}`,
      `{name:'department', map:(v:ISkuRaw)=>v.product?.department?.name}`,
    ].join(', '),
  ],
  [
    'sprint',
    [
      __format(['name']),
      `{ name:'project', map:(v:ISprintRaw)=>v.project?.name }`,
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
      `{ name: 'assignees', map:(v:ITaskRaw)=>v.assignees?.map(e=>e.username).join(', ') }`,
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
      `{ name: 'assignees', map:(v:ITicketRaw)=> v.assignees?.map(e=>e.username).join(', ') }`,
    ].join(','),
  ],
  [
    'user-address',
    [
      __format(['street', 'city', 'state', 'country', 'zip']),
      `{ name:'owner', map:(v:IUserAddressRaw)=>v.owner?.username}`,
    ].join(', '),
  ],
  [
    'user-email',
    [
      __format(['email']),
      `{name: 'owner', map:(v:IUserEmailRaw)=>v.owner?.username }`,
    ].join(','),
  ],
  [
    'user-phone',
    [
      __format(['phone']),
      `{name: 'owner', map:(v:IUserPhoneRaw)=>v.owner?.username}`,
    ].join(','),
  ],
  [
    'user',
    [
      __format(['username']),
      `{name:'roles', map:(v:IUserRaw)=>v.roles?.map(e=>e.name).join(',')}`,
    ].join(', '),
  ],
  ['price-level', __format(['name'])],
  [
    'price',
    [
      `{name:'name',map:(v:IPriceRaw)=>v.sku.name}`,
      `{name:'barcode',map:(v:IPriceRaw)=>v.sku.upc}`,
      `{name:'price', prefix:'$'}`,
      `{name:'cost', prefix:'$'}`,
      `{name:'priceLevel', label:'Price Level' , map:(v:IPriceRaw)=>v.priceLevel.name }`,
      `{name:'description',map:(v:IPriceRaw)=>v.sku.description}`,
    ].join(', '),
  ],
  [
    'quantity',
    [
      `{name:'name',map:(v:IQuantityRaw)=>v.sku.name}`,
      `{name:'description',map:(v:IQuantityRaw)=>v.sku?.description}`,
      `{name:'barcode', map:(v:IQuantityRaw)=>v.sku?.upc}`,
      `{name:'store', map:(v:IQuantityRaw)=>v.store?.name}`,
      __format(['quantity']),
    ].join(', '),
  ],
];

for (const [r, f] of rns) {
  execSync(`npx nx g @mdtx/gen:table-option ${r} "${f}"`);
}
