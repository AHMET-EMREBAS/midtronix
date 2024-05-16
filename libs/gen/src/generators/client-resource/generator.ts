import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { ClientResourceGeneratorSchema } from './schema';

export async function clientResourceGenerator(
  tree: Tree,
  options: ClientResourceGeneratorSchema
) {
  const projectRoot = `libs/${options.name}`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default clientResourceGenerator;
