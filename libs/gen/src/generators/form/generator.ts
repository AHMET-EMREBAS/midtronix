/* eslint-disable @nx/enforce-module-boundaries */
import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { FormGeneratorSchema } from './schema';

export async function formGenerator(tree: Tree, options: FormGeneratorSchema) {
  const projectRoot = `libs/forms/src/lib/form-components`;

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name),
  });

  await formatFiles(tree);
}

export default formGenerator;
