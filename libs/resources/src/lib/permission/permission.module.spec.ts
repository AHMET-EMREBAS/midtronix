import { DataSource, Repository } from 'typeorm';
import { Permission, PermissionView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { PermissionModule } from './permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('PermissionModule', () => {
  let ds: DataSource;

  let permissionRepo: Repository<Permission>;
  let permissionViewRepo: Repository<PermissionView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/permission-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        PermissionModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/permission-module.sqlite',
      entities: [Permission, PermissionView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    permissionRepo = ds.getRepository(Permission);
    permissionViewRepo = ds.getRepository(PermissionView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(permissionRepo).toBeTruthy();
    expect(permissionViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await permissionRepo.find()).toBeTruthy();
    expect(await permissionViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
