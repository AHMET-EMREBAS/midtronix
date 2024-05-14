import { IPermission, IRole, IUser } from '../models';

export interface IUserService {
  findByUsername(): IUser<IRole<IPermission>>;
}
