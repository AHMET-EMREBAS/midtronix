/**
 * pluralize text
 * @param value string
 * @returns
 */
export function plural(value: string) {
  const lowerName = value.toLowerCase();

  if (lowerName && lowerName.length > 0) {
    const iesPattern = /^\w+[^euioa]y$/i;
    const esPattern = /^\w+[^euioa]o$/i;

    if (iesPattern.test(lowerName)) {
      return value.slice(0, -1) + 'ies';
    } else if (esPattern.test(lowerName)) {
      return value + 'es';
    } else if (lowerName.endsWith('ss')) {
      return value + 'es';
    } else if (lowerName.endsWith('y')) {
      return value.slice(0, value.length - 2) + 'ies';
    }
    return value + 's';
  }
  throw new Error('Name is undefined!');
}
