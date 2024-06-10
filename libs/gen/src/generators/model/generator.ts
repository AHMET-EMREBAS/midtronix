import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { ModelGeneratorSchema } from './schema';
import { generateIndexContent } from '../__utils';

export async function modelGenerator(
  tree: Tree,
  options: ModelGeneratorSchema
) {
  const projectRoot = `libs/models/src/lib`;

  const indexes = generateIndexContent(projectRoot);
  
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name),
    indexes,
  });

  await formatFiles(tree);
}

export default modelGenerator;
