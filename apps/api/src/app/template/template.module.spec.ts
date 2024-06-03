import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Template, TemplateView } from '@mdtx/entity';
import { Repository } from 'typeorm';
import { TemplateController } from './template.controller';

const entities = [Template, TemplateView];

describe('TemplateModuleTest', () => {
  let app: TestingModule;
  let controller: TemplateController;
  let repo: Repository<Template>;
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
    }).compile();
    controller = app.get(TemplateController);
    repo = app.get(getRepositoryToken(Template));
  });

  it('should initialize classes', () => {
    expect(app).toBeDefined();
    expect(controller).toBeDefined();
    expect(repo).toBeDefined();
  });

  afterAll(() => {
    repo.manager.connection.destroy();
  });
});
