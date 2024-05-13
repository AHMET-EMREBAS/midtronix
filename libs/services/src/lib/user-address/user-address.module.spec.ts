import { Test, TestingModule } from '@nestjs/testing';
import { UserAddressController } from './user-address.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  UserAddress,
  UserAddressEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { UserAddressService } from './user-address.service';
import { RepositoryService } from '@mdtx/core';

describe('UserAddressModuleTest', () => {
  let app: TestingModule;
  let controller: UserAddressController;
  let repo: Repository<UserAddress>;
  let service: RepositoryService<UserAddress>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...UserAddressEntities]),
      ],
      controllers: [UserAddressController],
      providers: [UserAddressService],
    }).compile();
    controller = app.get(UserAddressController);
    repo = app.get(getRepositoryToken(UserAddress));

    service = app.get(UserAddressService);
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
