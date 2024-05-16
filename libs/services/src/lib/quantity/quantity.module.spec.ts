import { Test, TestingModule } from '@nestjs/testing';
import { QuantityController } from './quantity.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Quantity, QuantityEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { QuantityService } from './quantity.service';
import { RepositoryService } from '@mdtx/core';

describe('QuantityModuleTest', () => {
  let app: TestingModule;
  let controller: QuantityController;
  let repo: Repository<Quantity>;
  let service: RepositoryService<Quantity>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...QuantityEntities]),
      ],
      controllers: [QuantityController],
      providers: [QuantityService],
    }).compile();
    controller = app.get(QuantityController);
    repo = app.get(getRepositoryToken(Quantity));

    service = app.get(QuantityService);
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
