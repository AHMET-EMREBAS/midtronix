/* eslint-disable @nx/enforce-module-boundaries */
import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { NgrxServiceGeneratorSchema } from './schema';

export async function ngrxServiceGenerator(
  tree: Tree,
  options: NgrxServiceGeneratorSchema
) {
  const projectRoot = `libs/ngrx/src/lib/services`;

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name),
  });
  await formatFiles(tree);
}

export default ngrxServiceGenerator;
