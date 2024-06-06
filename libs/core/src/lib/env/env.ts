export function mode() {
  return process.env['NODE_ENV'];
}

export function isTesting() {
  return mode() === 'test';
}

export function isDevMode<T>(devValue: T, prodValue: T) {
  return mode() === 'development' ? devValue : prodValue;
}
