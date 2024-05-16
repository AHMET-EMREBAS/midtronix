import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { ClientResourceGeneratorSchema } from './schema';

export async function clientResourceGenerator(
  tree: Tree,
  options: ClientResourceGeneratorSchema
) {
  const projectRoot = `libs/modules/sub-modules/src/lib`;
  const allNames = names(options.name);
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...allNames,
  });
  await formatFiles(tree);
}

export default clientResourceGenerator;
