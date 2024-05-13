import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { User, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { RepositoryService } from '@mdtx/core';

describe('UserModuleTest', () => {
  let app: TestingModule;
  let controller: UserController;
  let repo: Repository<User>;
  let service: RepositoryService<User>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([User]),
      ],
      controllers: [UserController],
      providers: [UserService],
    }).compile();
    controller = app.get(UserController);
    repo = app.get(getRepositoryToken(User));

    service = app.get(UserService);
  });

  it('should initialize classes', () => {
    expect(app).toBeDefined();
    expect(controller).toBeDefined();
    expect(repo).toBeDefined();
    expect(service).toBeTruthy();
  });

  afterAll(() => {
    repo.manager.connection.destroy();
  });
});
