/* eslint-disable @nx/enforce-module-boundaries */
import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { SearchInputGeneratorSchema } from './schema';
import { plural } from '@mdtx/utils';

export async function searchInputGenerator(
  tree: Tree,
  options: SearchInputGeneratorSchema
) {
  const projectRoot = `libs/modules/search/src/lib/search`;

  const allNames = names(options.name);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...allNames,
    pluralClassName: plural(allNames.className),
  });
  await formatFiles(tree);
}

export default searchInputGenerator;
