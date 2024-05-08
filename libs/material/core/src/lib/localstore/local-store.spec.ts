import { LocalStore } from './local-store';
describe('LocalStoreManager', () => {
  it('should create store', () => {
    const store = LocalStore.createStore('some');
    store.set('hello');
    expect(store.get()).toBe('hello');

    store.remove();
    expect(store.get()).toBeNull();
  });
});
