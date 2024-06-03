import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Template, TemplateView } from '@mdtx/entity';
import { Repository } from 'typeorm';
import { RepositoryService } from '@mdtx/core';
import {
  TemplateController,
  TemplateService,
  TemplateModule,
} from './template.module';

const entities = [Template, TemplateView];

describe('TemplateModuleTest', () => {
  let app: TestingModule;
  let controller: TemplateController;
  let repo: Repository<Template>;
  let service: RepositoryService<Template>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/template.sqlite',
          entities,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature(entities),
      ],
      controllers: [TemplateController],
      providers: [TemplateService],
    }).compile();
    controller = app.get(TemplateController);
    repo = app.get(getRepositoryToken(Template));

    service = app.get(TemplateService);
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
