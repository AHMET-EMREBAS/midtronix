import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { ToolbarGeneratorSchema } from './schema';

export async function toolbarGenerator(
  tree: Tree,
  options: ToolbarGeneratorSchema
) {
  const projectRoot = `libs/tables/src/lib/toolbars`;

  const allNames = names(options.name);
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...allNames,
  });
  await formatFiles(tree);
}

export default toolbarGenerator;
