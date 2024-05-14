import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { ngrxServiceGenerator } from './generator';
import { NgrxServiceGeneratorSchema } from './schema';

describe('ngrx-service generator', () => {
  let tree: Tree;
  const options: NgrxServiceGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ngrxServiceGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
