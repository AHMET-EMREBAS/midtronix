import { DataSource, Repository } from 'typeorm';
import { PriceLevel, PriceLevelView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { PriceLevelModule } from './price-level.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('PriceLevelModule', () => {
  let ds: DataSource;

  let price-levelRepo: Repository<PriceLevel>;
  let price-levelViewRepo: Repository<PriceLevelView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/price-level-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        PriceLevelModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/price-level-module.sqlite',
      entities: [PriceLevel, PriceLevelView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    price-levelRepo = ds.getRepository(PriceLevel);
    price-levelViewRepo = ds.getRepository(PriceLevelView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(price-levelRepo).toBeTruthy();
    expect(price-levelViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await price-levelRepo.find()).toBeTruthy();
    expect(await price-levelViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
