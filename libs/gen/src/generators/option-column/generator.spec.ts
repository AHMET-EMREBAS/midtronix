import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { optionColumnGenerator } from './generator';
import { OptionColumnGeneratorSchema } from './schema';

describe('option-column generator', () => {
  let tree: Tree;
  const options: OptionColumnGeneratorSchema = { name: 'test',columnName:'some' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await optionColumnGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
