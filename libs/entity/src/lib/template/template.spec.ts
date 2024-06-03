import { DataSource, Repository } from '@mdtx/core';
import { Template } from './template.entity';
import { TemplateView } from './template.view';
import { TemplateSubscriber } from './template.subscriber';
describe('Template Entity', () => {
  let ds: DataSource;

  let repo: Repository<Template>;
  let viewRepo: Repository<TemplateView>;

  beforeAll(async () => {
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/template.sqlite',
      entities: [Template, TemplateView],
      subscribers: [TemplateSubscriber],
      synchronize: true,
      dropSchema: true,
    }).initialize();
    repo = ds.getRepository(Template);
    viewRepo = ds.getRepository(TemplateView);
  });

  it('should initialize repositories', async () => {
    expect(repo).toBeDefined();
    expect(viewRepo).toBeDefined();
    expect(await repo.find()).toBeTruthy();
    expect(await viewRepo.find()).toBeTruthy();
  });

  afterAll(async () => {
    await ds.destroy();
  });
});
