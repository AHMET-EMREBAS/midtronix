// import { IBaseEntity, IID } from '../__base';

import { IBaseEntity } from "../__base";

// /**
//  * @param owner customer
//  * @param user employee
//  * @param store
//  * @param note string
//  * @param discountTotal number
//  * @param subtotal number
//  * @param total number
//  */
// export interface ICart<
//   TCustomer extends IID = IID,
//   TUser extends IID = IID,
//   TStore extends IID = IID
// > extends IBaseEntity {
//   employee: TUser;
//   customer: TCustomer;
//   store: TStore;
//   note?: string;
//   checkout?: boolean;
// }


export interface ICartView  extends IBaseEntity{ 


}