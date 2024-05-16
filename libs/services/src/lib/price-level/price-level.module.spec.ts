import { Test, TestingModule } from '@nestjs/testing';
import { PriceLevelController } from './price-level.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { PriceLevel, PriceLevelEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { PriceLevelService } from './price-level.service';
import { RepositoryService } from '@mdtx/core';

describe('PriceLevelModuleTest', () => {
  let app: TestingModule;
  let controller: PriceLevelController;
  let repo: Repository<PriceLevel>;
  let service: RepositoryService<PriceLevel>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...PriceLevelEntities]),
      ],
      controllers: [PriceLevelController],
      providers: [PriceLevelService],
    }).compile();
    controller = app.get(PriceLevelController);
    repo = app.get(getRepositoryToken(PriceLevel));

    service = app.get(PriceLevelService);
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
