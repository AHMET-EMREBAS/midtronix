import { hashSync, genSaltSync } from 'bcrypt';

export const Users = [
  {
    username: 'admin@mdtronix.com',
    password: hashSync('!Password123.', genSaltSync(8)),
    roles: [{ id: 1 }],
  },
];
