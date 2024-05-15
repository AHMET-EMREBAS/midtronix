/* eslint-disable @nx/enforce-module-boundaries */
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { searchInputGenerator } from './generator';
import { SearchInputGeneratorSchema } from './schema';

describe('search-input generator', () => {
  let tree: Tree;
  const options: SearchInputGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await searchInputGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
