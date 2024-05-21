import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Order, OrderEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { OrderService } from './order.service';
import { RepositoryService } from '@mdtx/core';

describe('OrderModuleTest', () => {
  let app: TestingModule;
  let controller: OrderController;
  let repo: Repository<Order>;
  let service: RepositoryService<Order>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...OrderEntities]),
      ],
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();
    controller = app.get(OrderController);
    repo = app.get(getRepositoryToken(Order));

    service = app.get(OrderService);
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
