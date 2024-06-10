import { readdirSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

export function generateIndexContent(targetRoot: string) {
  const dirs = readdirSync(join(cwd(), targetRoot));
  const indexes = dirs
    .filter((e) => !e.startsWith('index'))
    .map((e) => `export * from './${e}';`);
  return indexes.join('\n');
}
