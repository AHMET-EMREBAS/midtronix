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

  it('should create data', async () => {
    const saved = await sampleRepo.save({ name: 'Sample 1' });

    expect(saved).toBeTruthy();
    expect(saved.name).toBe('Sample 1');

    const foundAll = await sampleViewRepo.find();
    expect(foundAll).toBeTruthy();

    await sampleRepo.save({ name: 'Sample 2' });
    await sampleRepo.save({ name: 'Sample 3' });
    await sampleRepo.save({ name: 'Sample 4' });

    const foundItem = await sampleViewRepo.findOneBy({
      sampleId: saved.id + '',
    });
    expect(foundItem?.sampleId).toBe(saved.id);

    const count = await sampleRepo.count();

    expect(count).toBe(4);
  });

  afterAll(() => {
    ds.destroy();
  });
});
