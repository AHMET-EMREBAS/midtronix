import { DataSource, Repository } from 'typeorm';
import { Quantity, QuantityView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { QuantityModule } from './quantity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('QuantityModule', () => {
  let ds: DataSource;

  let quantityRepo: Repository<Quantity>;
  let quantityViewRepo: Repository<QuantityView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/quantity-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        QuantityModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/quantity-module.sqlite',
      entities: [Quantity, QuantityView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    quantityRepo = ds.getRepository(Quantity);
    quantityViewRepo = ds.getRepository(QuantityView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(quantityRepo).toBeTruthy();
    expect(quantityViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await quantityRepo.find()).toBeTruthy();
    expect(await quantityViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
