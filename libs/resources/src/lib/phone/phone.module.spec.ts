import { DataSource, Repository } from 'typeorm';
import { Phone, PhoneView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { PhoneModule } from './phone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('PhoneModule', () => {
  let ds: DataSource;

  let phoneRepo: Repository<Phone>;
  let phoneViewRepo: Repository<PhoneView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/phone-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        PhoneModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/phone-module.sqlite',
      entities: [Phone, PhoneView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    phoneRepo = ds.getRepository(Phone);
    phoneViewRepo = ds.getRepository(PhoneView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(phoneRepo).toBeTruthy();
    expect(phoneViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await phoneRepo.find()).toBeTruthy();
    expect(await phoneViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
