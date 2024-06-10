import { DataSource, Repository } from 'typeorm';
import { Store, StoreView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { StoreModule } from './store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('StoreModule', () => {
  let ds: DataSource;

  let storeRepo: Repository<Store>;
  let storeViewRepo: Repository<StoreView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/store-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        StoreModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/store-module.sqlite',
      entities: [Store, StoreView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    storeRepo = ds.getRepository(Store);
    storeViewRepo = ds.getRepository(StoreView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(storeRepo).toBeTruthy();
    expect(storeViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await storeRepo.find()).toBeTruthy();
    expect(await storeViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
