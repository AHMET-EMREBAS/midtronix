import { Test, TestingModule } from '@nestjs/testing';
import { PriceController } from './price.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Price, PriceEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { PriceService } from './price.service';
import { RepositoryService } from '@mdtx/core';

describe('PriceModuleTest', () => {
  let app: TestingModule;
  let controller: PriceController;
  let repo: Repository<Price>;
  let service: RepositoryService<Price>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...PriceEntities]),
      ],
      controllers: [PriceController],
      providers: [PriceService],
    }).compile();
    controller = app.get(PriceController);
    repo = app.get(getRepositoryToken(Price));

    service = app.get(PriceService);
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
