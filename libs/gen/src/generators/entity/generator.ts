import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { EntityGeneratorSchema } from './schema';

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  const projectRoot = `libs/${options.name}`;

  const N = names(options.name);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...N,
  });

  await formatFiles(tree);
}

export default entityGenerator;
