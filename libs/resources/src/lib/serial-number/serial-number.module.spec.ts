import { DataSource, Repository } from 'typeorm';
import { SerialNumber, SerialNumberView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { SerialNumberModule } from './serial-number.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('SerialNumberModule', () => {
  let ds: DataSource;

  let serialNumberRepo: Repository<SerialNumber>;
  let serialNumberViewRepo: Repository<SerialNumberView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/serial-number-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        SerialNumberModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/serial-number-module.sqlite',
      entities: [SerialNumber, SerialNumberView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    serialNumberRepo = ds.getRepository(SerialNumber);
    serialNumberViewRepo = ds.getRepository(SerialNumberView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(serialNumberRepo).toBeTruthy();
    expect(serialNumberViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await serialNumberRepo.find()).toBeTruthy();
    expect(await serialNumberViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
