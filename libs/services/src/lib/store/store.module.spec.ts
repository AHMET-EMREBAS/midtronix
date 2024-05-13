import { Test, TestingModule } from '@nestjs/testing';
import { StoreController } from './store.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Store, StoreEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { StoreService } from './store.service';
import { RepositoryService } from '@mdtx/core';

describe('StoreModuleTest', () => {
  let app: TestingModule;
  let controller: StoreController;
  let repo: Repository<Store>;
  let service: RepositoryService<Store>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...StoreEntities]),
      ],
      controllers: [StoreController],
      providers: [StoreService],
    }).compile();
    controller = app.get(StoreController);
    repo = app.get(getRepositoryToken(Store));

    service = app.get(StoreService);
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
