/* eslint-disable @nx/enforce-module-boundaries */
import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { OptionColumnGeneratorSchema } from './schema';
import { plural } from '@mdtx/utils';

export async function optionColumnGenerator(
  tree: Tree,
  options: OptionColumnGeneratorSchema
) {
  const projectRoot = `libs/ngrx/src/lib/option-columns`;

  const allNames = names(options.name);
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...allNames,
    pluralClassName: plural(allNames.className),
    columnName:options.columnName
  });
  await formatFiles(tree);
}

export default optionColumnGenerator;
