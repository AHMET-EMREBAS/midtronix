import { DataSource, Repository } from 'typeorm';
import { Sample, SampleView } from '@mdtx/entities';

describe('SampleModule', () => {
  let ds: DataSource;

  let sampleRepo: Repository<Sample>;
  let sampleViewRepo: Repository<SampleView>;

  beforeAll(async () => {
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/sample-module.sqlite',
      entities: [Sample, SampleView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    sampleRepo = ds.getRepository(Sample);
    sampleViewRepo = ds.getRepository(SampleView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(sampleRepo).toBeTruthy();
    expect(sampleViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await sampleRepo.find()).toBeTruthy();
    expect(await sampleViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
