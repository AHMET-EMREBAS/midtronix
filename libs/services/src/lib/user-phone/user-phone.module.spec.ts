import { Test, TestingModule } from '@nestjs/testing';
import { UserPhoneController } from './user-phone.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { UserPhone, UserPhoneEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { UserPhoneService } from './user-phone.service';
import { RepositoryService } from '@mdtx/core';

describe('UserPhoneModuleTest', () => {
  let app: TestingModule;
  let controller: UserPhoneController;
  let repo: Repository<UserPhone>;
  let service: RepositoryService<UserPhone>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...UserPhoneEntities]),
      ],
      controllers: [UserPhoneController],
      providers: [UserPhoneService],
    }).compile();
    controller = app.get(UserPhoneController);
    repo = app.get(getRepositoryToken(UserPhone));

    service = app.get(UserPhoneService);
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
