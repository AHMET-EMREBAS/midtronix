import { DataSource, Repository } from 'typeorm';
import { Manufacturer, ManufacturerView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { ManufacturerModule } from './manufacturer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('ManufacturerModule', () => {
  let ds: DataSource;

  let manufacturerRepo: Repository<Manufacturer>;
  let manufacturerViewRepo: Repository<ManufacturerView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/manufacturer-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        ManufacturerModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/manufacturer-module.sqlite',
      entities: [Manufacturer, ManufacturerView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    manufacturerRepo = ds.getRepository(Manufacturer);
    manufacturerViewRepo = ds.getRepository(ManufacturerView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(manufacturerRepo).toBeTruthy();
    expect(manufacturerViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await manufacturerRepo.find()).toBeTruthy();
    expect(await manufacturerViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
