import {
  Column,
  DataSource,
  Entity,
  PrimaryGeneratedColumn,
  Repository,
  ViewColumn,
  ViewEntity,
} from 'typeorm';
import { ManyRelation, OwnerRelation } from './typeorm';
import { RepositoryService } from './respository.service';
class BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'varchar' }) name!: string;
}

@Entity()
class Category extends BaseEntity {}

@Entity()
class Owner extends BaseEntity {}

@Entity()
class Sample extends BaseEntity {
  @ManyRelation(Category)
  categories?: Category[];

  @OwnerRelation(Owner)
  owner!: Owner;
}

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('s.id', 'id')
      .addSelect('s.name', 'name')
      .addSelect('o.name', 'owner')
      .addSelect("STRING_AGG(c.name, ',')", 'categories')
      .from(Sample, 's')
      .leftJoin('sample_categories_category', 'sc', 'sc.sampleId = s.id')
      .leftJoin(Owner, 'o', 'o.id = s.ownerId')
      .leftJoin(Category, 'c', 'c.id =sc.categoryId')
      .groupBy('s.id, s.name, o.name');
  },
})
class SampleView {
  @ViewColumn() id!: number;
  @ViewColumn() name!: string;
  @ViewColumn() categories!: string;
  @ViewColumn() owner!: string;
}

describe('RepositoryService', () => {
  let ds: DataSource;
  let repo: Repository<Sample>;
  let sampleService: RepositoryService<Sample>;

  let catRepo: Repository<Category>;
  let catService: RepositoryService<Category>;

  let ownerRepo: Repository<Owner>;
  let ownerService: RepositoryService<Owner>;

  let sampleViewRepo: Repository<SampleView>;

  beforeAll(async () => {
    ds = await new DataSource({
      type: 'postgres',
      database: 'testdb',
      username: 'postgres',
      password: 'password',
      entities: [Owner, Sample, Category, SampleView],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    repo = ds.getRepository(Sample);
    sampleService = new RepositoryService(repo);
    catRepo = ds.getRepository(Category);
    catService = new RepositoryService(catRepo);

    ownerRepo = ds.getRepository(Owner);
    ownerService = new RepositoryService(ownerRepo);

    sampleViewRepo = ds.getTreeRepository(SampleView);
  });

  it('should operate', async () => {
    const owner = await ownerService.save({ name: 'Owner' });
    const owner2 = await ownerService.save({ name: 'Owner 2' });

    const cat1 = await catService.save({ name: 'cat 1' });
    const cat2 = await catService.save({ name: 'cat 2' });
    const sample = await sampleService.save({
      name: 'name',
      owner: { id: owner.id },
      categories: [{ id: cat1.id }],
    });
    const sample1 = await sampleService.save({
      name: 'name 1',
      owner: { id: owner.id },
      categories: [{ id: cat1.id }],
    });

    expect(owner).toBeTruthy();
    expect(cat1).toBeTruthy();
    expect(sample).toBeTruthy();

    expect((await sampleService.count()).count).toBe(2);
    expect((await ownerService.count()).count).toBe(2);
    expect((await catService.count()).count).toBe(2);

    const found = await sampleService.findOneById(1);

    if (found) {
      expect(found).toBeTruthy();
      expect(found.id).toBe(1);
      expect(found.name).toBe(sample.name);
      expect(found.categories?.length).toBe(1);
      expect(found.categories?.[0].name).toBe(cat1.name);
      expect(found.owner).toBeUndefined();
    } else {
      fail('Not created the entity');
    }

    await sampleService.addRelation({
      id: sample.id,
      relationName: 'categories',
      relationId: cat2.id,
    });

    const founds = await sampleService.findAll({});
    expect(founds.length).toBe(2);

    expect(founds[0].categories?.length).toBe(2);

    const removeRelationResult = await sampleService.removeRelation({
      id: sample.id,
      relationId: cat1.id,
      relationName: 'categories',
    });

    await sampleService.addRelation({
      id: sample.id,
      relationId: cat1.id,
      relationName: 'categories',
    });

    expect(removeRelationResult?.categories?.length).toBe(1);

    const updateOwnerResult = await sampleService.setRelation({
      id: sample.id,
      relationName: 'owner',
      relationId: owner2.id,
    });

    sampleViewRepo.createQueryBuilder('c');

    const manyFind = await sampleViewRepo.find();

    console.log(manyFind);
    const result = await sampleViewRepo.findOneBy({ id: sample.id });

    expect(result?.id).toBe(sample.id);
    expect(result?.name).toBe(sample.name);
    expect(result?.categories).toBe(cat1.name + ',' + cat2.name);
    expect(result?.owner).toBe(owner2.name);
  });
});
