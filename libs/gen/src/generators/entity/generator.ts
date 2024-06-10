import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { EntityGeneratorSchema } from './schema';
import { generateIndexContent } from '../__utils';

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  const projectRoot = `libs/entities/src/lib`;

  const N = names(options.name);
  const indexes = generateIndexContent(projectRoot);
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...N,
    indexes,
  });

  await formatFiles(tree);
}

export default entityGenerator;
