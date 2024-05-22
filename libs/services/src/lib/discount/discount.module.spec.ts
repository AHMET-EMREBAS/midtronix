import { Test, TestingModule } from '@nestjs/testing';
import { DiscountController } from './discount.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Discount, DiscountEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { DiscountService } from './discount.service';
import { RepositoryService } from '@mdtx/core';

describe('DiscountModuleTest', () => {
  let app: TestingModule;
  let controller: DiscountController;
  let repo: Repository<Discount>;
  let service: RepositoryService<Discount>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...DiscountEntities]),
      ],
      controllers: [DiscountController],
      providers: [DiscountService],
    }).compile();
    controller = app.get(DiscountController);
    repo = app.get(getRepositoryToken(Discount));

    service = app.get(DiscountService);
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
