/* eslint-disable @nx/enforce-module-boundaries */
import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { FormBuilderGeneratorSchema } from './schema';

export async function formBuilderGenerator(
  tree: Tree,
  options: FormBuilderGeneratorSchema
) {
  const projectRoot = `libs/forms/src/lib/forms`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...names(options.name),
  });
  await formatFiles(tree);
}

export default formBuilderGenerator;
