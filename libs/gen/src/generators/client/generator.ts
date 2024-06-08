import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { ClientGeneratorSchema } from './schema';

export async function clientGenerator(
  tree: Tree,
  options: ClientGeneratorSchema
) {
  const projectRoot = `libs/resource-clients/src/lib`;

  const N = names(options.name);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, { ...N });

  await formatFiles(tree);
}

export default clientGenerator;
