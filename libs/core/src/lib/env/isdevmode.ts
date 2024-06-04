export function isDevMode<T>(value: T, alternative: T) {
  return process.env['NODE_ENV'] == 'development' ? value : alternative;
}
