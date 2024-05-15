import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { TableGeneratorSchema } from './schema';
import { plural } from '@mdtx/utils';

export async function tableGenerator(
  tree: Tree,
  options: TableGeneratorSchema
) {
  const projectRoot = `libs/tables/src/lib/tables`;
  const allNames = names(options.name);
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...allNames,
    pluralClassName: plural(allNames.className),
  });
  await formatFiles(tree);
}

export default tableGenerator;
