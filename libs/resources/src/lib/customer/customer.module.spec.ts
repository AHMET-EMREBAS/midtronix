import { DataSource, Repository } from 'typeorm';
import { Customer, CustomerView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { CustomerModule } from './customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('CustomerModule', () => {
  let ds: DataSource;

  let customerRepo: Repository<Customer>;
  let customerViewRepo: Repository<CustomerView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/customer-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        CustomerModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/customer-module.sqlite',
      entities: [Customer, CustomerView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    customerRepo = ds.getRepository(Customer);
    customerViewRepo = ds.getRepository(CustomerView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(customerRepo).toBeTruthy();
    expect(customerViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await customerRepo.find()).toBeTruthy();
    expect(await customerViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
