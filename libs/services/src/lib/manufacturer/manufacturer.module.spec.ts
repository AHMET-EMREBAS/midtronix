import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturerController } from './manufacturer.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  Manufacturer,
  ManufacturerEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { ManufacturerService } from './manufacturer.service';
import { RepositoryService } from '@mdtx/core';

describe('ManufacturerModuleTest', () => {
  let app: TestingModule;
  let controller: ManufacturerController;
  let repo: Repository<Manufacturer>;
  let service: RepositoryService<Manufacturer>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...ManufacturerEntities]),
      ],
      controllers: [ManufacturerController],
      providers: [ManufacturerService],
    }).compile();
    controller = app.get(ManufacturerController);
    repo = app.get(getRepositoryToken(Manufacturer));

    service = app.get(ManufacturerService);
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
