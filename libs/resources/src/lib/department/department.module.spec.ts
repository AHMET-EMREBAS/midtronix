import { DataSource, Repository } from 'typeorm';
import { Department, DepartmentView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { DepartmentModule } from './department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('DepartmentModule', () => {
  let ds: DataSource;

  let departmentRepo: Repository<Department>;
  let departmentViewRepo: Repository<DepartmentView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/department-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        DepartmentModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/department-module.sqlite',
      entities: [Department, DepartmentView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    departmentRepo = ds.getRepository(Department);
    departmentViewRepo = ds.getRepository(DepartmentView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(departmentRepo).toBeTruthy();
    expect(departmentViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await departmentRepo.find()).toBeTruthy();
    expect(await departmentViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
