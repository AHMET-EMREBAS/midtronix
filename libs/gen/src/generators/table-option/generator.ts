import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { TableOptionGeneratorSchema } from './schema';

export async function tableOptionGenerator(
  tree: Tree,
  options: TableOptionGeneratorSchema
) {
  const projectRoot = `libs/tables/src/lib/table-options`;
  const allNames = names(options.name);
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...allNames,
    fields: options.fields,
  });
  await formatFiles(tree);
}

export default tableOptionGenerator;
