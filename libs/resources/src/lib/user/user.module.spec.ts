import { DataSource, Repository } from 'typeorm';
import { User, UserView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('UserModule', () => {
  let ds: DataSource;

  let userRepo: Repository<User>;
  let userViewRepo: Repository<UserView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/user-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        UserModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/user-module.sqlite',
      entities: [User, UserView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    userRepo = ds.getRepository(User);
    userViewRepo = ds.getRepository(UserView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(userRepo).toBeTruthy();
    expect(userViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await userRepo.find()).toBeTruthy();
    expect(await userViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
