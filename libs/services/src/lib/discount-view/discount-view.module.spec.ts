import { Test, TestingModule } from '@nestjs/testing';
import { DiscountViewController } from './discount-view.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  DiscountView,
  DiscountViewEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { DiscountViewService } from './discount-view.service';
import { RepositoryService } from '@mdtx/core';

describe('DiscountViewModuleTest', () => {
  let app: TestingModule;
  let controller: DiscountViewController;
  let repo: Repository<DiscountView>;
  let service: RepositoryService<DiscountView>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...DiscountViewEntities]),
      ],
      controllers: [DiscountViewController],
      providers: [DiscountViewService],
    }).compile();
    controller = app.get(DiscountViewController);
    repo = app.get(getRepositoryToken(DiscountView));

    service = app.get(DiscountViewService);
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
