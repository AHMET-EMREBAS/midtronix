/* eslint-disable @nx/enforce-module-boundaries */
import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { SearchInputGeneratorSchema } from './schema';

export async function searchInputGenerator(
  tree: Tree,
  options: SearchInputGeneratorSchema
) {
  const projectRoot = `libs/forms/src/lib/search-inputs`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name),
  });
  await formatFiles(tree);
}

export default searchInputGenerator;
