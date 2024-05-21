import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Cart, CartEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { CartService } from './cart.service';
import { RepositoryService } from '@mdtx/core';

describe('CartModuleTest', () => {
  let app: TestingModule;
  let controller: CartController;
  let repo: Repository<Cart>;
  let service: RepositoryService<Cart>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...CartEntities]),
      ],
      controllers: [CartController],
      providers: [CartService],
    }).compile();
    controller = app.get(CartController);
    repo = app.get(getRepositoryToken(Cart));

    service = app.get(CartService);
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
