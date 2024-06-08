import { DataSource, Repository } from 'typeorm';
import { Category, CategoryView } from '@mdtx/entities';
import { Test } from '@nestjs/testing';
import { CategoryModule } from './category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
describe('CategoryModule', () => {
  let ds: DataSource;

  let categoryRepo: Repository<Category>;
  let categoryViewRepo: Repository<CategoryView>;

  beforeAll(async () => {
    Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/category-module.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        CategoryModule,
      ],
    });
    ds = await new DataSource({
      type: 'better-sqlite3',
      database: 'tmp/database/category-module.sqlite',
      entities: [Category, CategoryView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    categoryRepo = ds.getRepository(Category);
    categoryViewRepo = ds.getRepository(CategoryView);
  });

  it('should initialize datasource', () => {
    expect(ds).toBeTruthy();
    expect(categoryRepo).toBeTruthy();
    expect(categoryViewRepo).toBeTruthy();
  });

  it('should get data', async () => {
    expect(await categoryRepo.find()).toBeTruthy();
    expect(await categoryViewRepo.find()).toBeTruthy();
  });

  afterAll(() => {
    ds.destroy();
  });
});
