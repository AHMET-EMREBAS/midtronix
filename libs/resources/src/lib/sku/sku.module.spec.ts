import { DataSource, Repository } from 'typeorm';
import { Sku, SkuView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { SkuModule } from './sku.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('SkuModule', () => {
  let ds: DataSource;

  let skuRepo: Repository<Sku>;
  let skuViewRepo: Repository<SkuView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sku-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        SkuModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/sku-module.sqlite',
      entities: [Sku, SkuView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    skuRepo = ds.getRepository(Sku);
    skuViewRepo = ds.getRepository(SkuView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(skuRepo).toBeTruthy();
    expect(skuViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await skuRepo.find()).toBeTruthy();
    expect(await skuViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
