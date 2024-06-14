import { DataSource, Repository } from 'typeorm';
import { Price, PriceView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { PriceModule } from './price.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('PriceModule', () => {
  let ds: DataSource;

  let priceRepo: Repository<Price>;
  let priceViewRepo: Repository<PriceView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/price-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        PriceModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/price-module.sqlite',
      entities: [Price, PriceView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    priceRepo = ds.getRepository(Price);
    priceViewRepo = ds.getRepository(PriceView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(priceRepo).toBeTruthy();
    expect(priceViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await priceRepo.find()).toBeTruthy();
    expect(await priceViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
