import { Test, TestingModule } from '@nestjs/testing';
import { UserEmailController } from './user-email.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { UserEmail, UserEmailEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { UserEmailService } from './user-email.service';
import { RepositoryService } from '@mdtx/core';

describe('UserEmailModuleTest', () => {
  let app: TestingModule;
  let controller: UserEmailController;
  let repo: Repository<UserEmail>;
  let service: RepositoryService<UserEmail>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...UserEmailEntities]),
      ],
      controllers: [UserEmailController],
      providers: [UserEmailService],
    }).compile();
    controller = app.get(UserEmailController);
    repo = app.get(getRepositoryToken(UserEmail));

    service = app.get(UserEmailService);
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
