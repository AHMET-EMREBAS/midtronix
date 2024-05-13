import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Category, CategoryEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { CategoryService } from './category.service';
import { RepositoryService } from '@mdtx/core';

describe('CategoryModuleTest', () => {
  let app: TestingModule;
  let controller: CategoryController;
  let repo: Repository<Category>;
  let service: RepositoryService<Category>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CategoryEntities]),
      ],
      controllers: [CategoryController],
      providers: [CategoryService],
    }).compile();
    controller = app.get(CategoryController);
    repo = app.get(getRepositoryToken(Category));

    service = app.get(CategoryService);
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
