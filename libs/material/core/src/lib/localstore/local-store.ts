export interface ILocalStore {
  get(): string | null;
  set(value: string): void;
  remove(): void;
}

/**
 * Use {@link LocalStore} to create a new store
 */
export class __LocalStore implements ILocalStore {
  constructor(protected readonly key: string) {}

  get() {
    return localStorage.getItem(this.key);
  }

  set(value: string) {
    return localStorage.setItem(this.key, value);
  }

  remove() {
    return localStorage.removeItem(this.key);
  }
}

/**
 * Create local storeage if it does not exist
 */
export class LocalStore {
  protected static readonly keys = new Set();
  private constructor() {
    // Singleton
  }

  static createStore(key: string) {
    if (this.keys.has(key)) {
      throw new Error(`${key} is already used!`);
    }
    this.keys.add(key);
    return new __LocalStore(key);
  }
}
