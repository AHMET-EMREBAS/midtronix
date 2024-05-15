/* eslint-disable @nx/enforce-module-boundaries */
import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { NgrxServiceGeneratorSchema } from './schema';
import { plural } from '@mdtx/utils';
export async function ngrxServiceGenerator(
  tree: Tree,
  options: NgrxServiceGeneratorSchema
) {
  const projectRoot = `libs/ngrx/src/lib/services`;

  const allNames = names(options.name);
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...allNames,
    pluralClassName: plural(allNames.className),
  });
  await formatFiles(tree);
}

export default ngrxServiceGenerator;
