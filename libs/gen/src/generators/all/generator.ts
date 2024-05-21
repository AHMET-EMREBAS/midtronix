import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { AllGeneratorSchema } from './schema';
import { exec } from 'child_process';
import toolbarGenerator from '../toolbar/generator';
import tableOptionGenerator from '../table-option/generator';
import optionColumnGenerator from '../option-column/generator';
import tableGenerator from '../table/generator';
import searchInputGenerator from '../search-input/generator';
import resourceGenerator from '../resource/generator';
import ngrxServiceGenerator from '../ngrx-service/generator';
import formBuilderGenerator from '../form-builder/generator';
import formGenerator from '../form/generator';
import clientResourceGenerator from '../client-resource/generator';

export async function allGenerator(tree: Tree, options: AllGeneratorSchema) {
  await toolbarGenerator(tree, options);
  await tableOptionGenerator(tree, { ...options, fields: 'name' });
  await optionColumnGenerator(tree, { ...options, columnName: 'name' });
  await tableGenerator(tree, options);
  await searchInputGenerator(tree, options);
  await resourceGenerator(tree, options);
  await ngrxServiceGenerator(tree, options);
  await formBuilderGenerator(tree, options);
  await formGenerator(tree, options);
  await clientResourceGenerator(tree, options);
}

export default allGenerator;
