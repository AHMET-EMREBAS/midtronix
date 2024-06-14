import { DataSource, Repository } from 'typeorm';
import { Attribute, AttributeView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { AttributeModule } from './attribute.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('AttributeModule', () => {
  let ds: DataSource;

  let attributeRepo: Repository<Attribute>;
  let attributeViewRepo: Repository<AttributeView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/attribute-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        AttributeModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/attribute-module.sqlite',
      entities: [Attribute, AttributeView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    attributeRepo = ds.getRepository(Attribute);
    attributeViewRepo = ds.getRepository(AttributeView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(attributeRepo).toBeTruthy();
    expect(attributeViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await attributeRepo.find()).toBeTruthy();
    expect(await attributeViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
