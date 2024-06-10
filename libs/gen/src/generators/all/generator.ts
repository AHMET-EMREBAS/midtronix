import { formatFiles, Tree } from '@nx/devkit';
import { AllGeneratorSchema } from './schema';
import entityGenerator from '../entity/generator';
import clientGenerator from '../client/generator';
import modelGenerator from '../model/generator';
import restGenerator from '../rest/generator';

export async function allGenerator(tree: Tree, options: AllGeneratorSchema) {
  await modelGenerator(tree, options);
  await entityGenerator(tree, options);
  await restGenerator(tree, options);
  await clientGenerator(tree, options);

  await formatFiles(tree);
}

export default allGenerator;
