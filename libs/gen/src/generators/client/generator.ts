import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { ClientGeneratorSchema } from './schema';

import { generateIndexContent } from '../__utils';

export async function clientGenerator(
  tree: Tree,
  options: ClientGeneratorSchema
) {
  const projectRoot = `libs/resource-clients/src/lib`;

  const indexes = generateIndexContent(projectRoot);

  const N = names(options.name);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...N,
    indexes,
  });

  await formatFiles(tree);
}

export default clientGenerator;
