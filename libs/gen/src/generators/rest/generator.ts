import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { RestGeneratorSchema } from './schema';
import { generateIndexContent } from '../__utils';

export async function restGenerator(tree: Tree, options: RestGeneratorSchema) {
  const N = names(options.name);
  const projectRoot = `libs/resources/src/lib`;
  const indexes = generateIndexContent(projectRoot);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...N,
    indexes,
  });
  await formatFiles(tree);
}

export default restGenerator;
