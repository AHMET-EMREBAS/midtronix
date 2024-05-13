import { Test, TestingModule } from '@nestjs/testing';
import { NotificationController } from './notification.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import {
  Notification,
  NotificationEntities,
  testDBOptions,
} from '@mdtx/database';
import { Repository } from 'typeorm';
import { NotificationService } from './notification.service';
import { RepositoryService } from '@mdtx/core';

describe('NotificationModuleTest', () => {
  let app: TestingModule;
  let controller: NotificationController;
  let repo: Repository<Notification>;
  let service: RepositoryService<Notification>;
  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(testDBOptions()),
        TypeOrmModule.forFeature([...NotificationEntities]),
      ],
      controllers: [NotificationController],
      providers: [NotificationService],
    }).compile();
    controller = app.get(NotificationController);
    repo = app.get(getRepositoryToken(Notification));

    service = app.get(NotificationService);
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
