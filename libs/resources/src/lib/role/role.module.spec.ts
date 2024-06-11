import { DataSource, Repository } from 'typeorm';
import { Role, RoleView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { RoleModule } from './role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('RoleModule', () => {
  let ds: DataSource;

  let roleRepo: Repository<Role>;
  let roleViewRepo: Repository<RoleView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/role-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        RoleModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/role-module.sqlite',
      entities: [Role, RoleView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    roleRepo = ds.getRepository(Role);
    roleViewRepo = ds.getRepository(RoleView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(roleRepo).toBeTruthy();
    expect(roleViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await roleRepo.find()).toBeTruthy();
    expect(await roleViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
