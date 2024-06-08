import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { ModelGeneratorSchema } from './schema';

export async function modelGenerator(
  tree: Tree,
  options: ModelGeneratorSchema
) {
  const projectRoot = `libs/models/src/lib`;

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name),
  });
  
  await formatFiles(tree);
}

export default modelGenerator;
