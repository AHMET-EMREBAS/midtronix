import { Test, TestingModule } from '@nestjs/testing';
import { TaxrateController } from './taxrate.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Taxrate, TaxrateEntities, testDBOptions } from '@mdtx/database';
import { Repository } from 'typeorm';
import { TaxrateService } from './taxrate.service';
import { RepositoryService } from '@mdtx/core';

describe('TaxrateModuleTest', () => {
  let app: TestingModule;
  let controller: TaxrateController;
  let repo: Repository<Taxrate>;
  let service: RepositoryService<Taxrate>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...TaxrateEntities]),
      ],
      controllers: [TaxrateController],
      providers: [TaxrateService],
    }).compile();
    controller = app.get(TaxrateController);
    repo = app.get(getRepositoryToken(Taxrate));

    service = app.get(TaxrateService);
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
