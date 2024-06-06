export function mode() {
  return process.env['NODE_ENV'];
}

export function isTesting() {
  return mode() === 'test';
}

export function isDevMode() {
  return mode() === 'development' || isTesting();
}
