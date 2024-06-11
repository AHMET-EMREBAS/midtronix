import { DataSource, Repository } from 'typeorm';
import { Address, AddressView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { AddressModule } from './address.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('AddressModule', () => {
  let ds: DataSource;

  let addressRepo: Repository<Address>;
  let addressViewRepo: Repository<AddressView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/address-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        AddressModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/address-module.sqlite',
      entities: [Address, AddressView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    addressRepo = ds.getRepository(Address);
    addressViewRepo = ds.getRepository(AddressView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(addressRepo).toBeTruthy();
    expect(addressViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await addressRepo.find()).toBeTruthy();
    expect(await addressViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
