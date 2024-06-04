export class BaseDto<T> {
  constructor(obj: Partial<T>) {
    Object.assign(this, obj);
  }
}
