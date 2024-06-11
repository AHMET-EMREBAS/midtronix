import { DataSource, Repository } from 'typeorm';
import { Email, EmailView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { EmailModule } from './email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('EmailModule', () => {
  let ds: DataSource;

  let emailRepo: Repository<Email>;
  let emailViewRepo: Repository<EmailView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/email-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        EmailModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/email-module.sqlite',
      entities: [Email, EmailView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    emailRepo = ds.getRepository(Email);
    emailViewRepo = ds.getRepository(EmailView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(emailRepo).toBeTruthy();
    expect(emailViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await emailRepo.find()).toBeTruthy();
    expect(await emailViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
