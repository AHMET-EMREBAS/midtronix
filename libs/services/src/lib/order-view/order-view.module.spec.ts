import { Test, TestingModule } from '@nestjs/testing';
import { OrderViewController } from './order-view.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { OrderView, OrderViewEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { OrderViewService } from './order-view.service';
import { RepositoryService } from '@mdtx/core';

describe('OrderViewModuleTest', () => {
  let app: TestingModule;
  let controller: OrderViewController;
  let repo: Repository<OrderView>;
  let service: RepositoryService<OrderView>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...OrderViewEntities]),
      ],
      controllers: [OrderViewController],
      providers: [OrderViewService],
    }).compile();
    controller = app.get(OrderViewController);
    repo = app.get(getRepositoryToken(OrderView));

    service = app.get(OrderViewService);
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
