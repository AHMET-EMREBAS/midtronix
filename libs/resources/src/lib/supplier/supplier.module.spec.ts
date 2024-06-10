import { DataSource, Repository } from 'typeorm';
import { Supplier, SupplierView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { SupplierModule } from './supplier.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('SupplierModule', () => {
  let ds: DataSource;

  let supplierRepo: Repository<Supplier>;
  let supplierViewRepo: Repository<SupplierView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/supplier-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        SupplierModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/supplier-module.sqlite',
      entities: [Supplier, SupplierView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    supplierRepo = ds.getRepository(Supplier);
    supplierViewRepo = ds.getRepository(SupplierView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(supplierRepo).toBeTruthy();
    expect(supplierViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await supplierRepo.find()).toBeTruthy();
    expect(await supplierViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
