import { BehaviorSubject, Observable, debounceTime } from 'rxjs';

export interface ILocalStore {
  get(): string | null;
  set(value: string): void;
  remove(): void;
}

export interface LocalStoreOptions {
  debounce?: number;
}

/**
 * Create local storeage if it does not exist
 */
export class LocalStore implements ILocalStore {
  protected static readonly keys = new Set();
  protected readonly $__value = new BehaviorSubject('');
  readonly $value!: Observable<string | null>;

  private constructor(
    protected readonly key: string,
    protected readonly options: LocalStoreOptions
  ) {
    this.$value = this.$__value.pipe(debounceTime(options.debounce ?? 400));
  }

  static createStore(
    key: string,
    options: LocalStoreOptions = { debounce: 400 }
  ) {
    if (this.keys.has(key)) {
      console.warn(`${key} is already used!`);
    }
    this.keys.add(key);
    return new LocalStore(key, options);
  }

  get<T extends string>() {
    return localStorage.getItem(this.key) as T;
  }

  set(value: string) {
    this.$__value.next(value);
    return localStorage.setItem(this.key, value);
  }

  remove() {
    return localStorage.removeItem(this.key);
  }

  int() {
    const value = localStorage.getItem(this.key);
    if (value) return parseInt(value);
    return null;
  }

  date() {
    const value = localStorage.getItem(this.key);
    if (value) return new Date(value);
    return null;
  }

  obj<T>(): T | null {
    const value = localStorage.getItem(this.key);
    if (value) return JSON.parse(value);
    return null;
  }
}
