// import { ApiVersion, AuthClientService } from '@mdtx/common';
// import { bearer } from '../support/bearer';

// const API_PREFIX = `api/${ApiVersion.v1}`;

// describe('Auth', () => {
//   let auth: AuthClientService;
//   beforeAll(async () => {
//     const initialAuth = new AuthClientService(API_PREFIX);
//     const res = await initialAuth.login({
//       username: 'user@example.com',
//       password: '!Password123',
//     });

//     console.log(res);
//     const token = res.accesstoken;

//     if (typeof token === 'string') {
//       auth = new AuthClientService(API_PREFIX, {
//         headers: { Authorization: bearer(token) },
//       });
//     }
//   });

//   it('should validate', () => {
//     expect(1).toBe(1);
//   });

//   it('POST /api/v1/auth/logout', async () => {
//     const res = await auth.logout();
//     expect(res.message).toBeTruthy();
//   });

//   it('POST /api/v1/auth/forgot-password', async () => {
//     const res = await auth.forgotPassword({ username: 'user@example.com' });
//     expect(res.message).toBeTruthy();
//   });

//   it('POST /api/v1/auth/update-password', async () => {
//     const res = await auth.updatePassword({
//       username: 'user@example.com',
//       password: '!Password123',
//       newPassword: '!!Password123',
//     });
//     expect(res.message).toBeTruthy();
//   });
// });

describe('Some', () => {
  it('should', () => {
    expect(1).toBe(1);
  });
});
