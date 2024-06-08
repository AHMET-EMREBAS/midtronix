import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { RestGeneratorSchema } from './schema';

export async function restGenerator(tree: Tree, options: RestGeneratorSchema) {
  const N = names(options.name);
  const projectRoot = `libs/resources/src/lib`;
  
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...N,
  });
  await formatFiles(tree);
}

export default restGenerator;
