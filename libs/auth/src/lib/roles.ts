export enum Roles {
  /**
   * Can read/write everything
   */
  ADMIN = 'Admin',

  /**
   * Can read everything
   */
  ANALIST = 'Analist',

  /**
   * Can read/write everything related to the inventory
   */
  INVENTORY_MANAGER = 'Inventory Manager',

  /**
   * Can create Order, Cart, and Sale
   */
  CASHIER = 'Cashier',
}
