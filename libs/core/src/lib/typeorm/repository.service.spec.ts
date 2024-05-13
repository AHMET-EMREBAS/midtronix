import {
  Column,
  DataSource,
  Entity,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
import { ManyRelation, OneRelation, OwnerRelation } from './typeorm';
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

describe('RepositoryService', () => {
  let ds: DataSource;
  let repo: Repository<Sample>;
  let sampleService: RepositoryService<Sample>;

  let catRepo: Repository<Category>;
  let catService: RepositoryService<Category>;

  let ownerRepo: Repository<Owner>;
  let ownerService: RepositoryService<Owner>;

  beforeAll(async () => {
    ds = await new DataSource({
      type: 'postgres',
      database: 'testdb',
      username: 'postgres',
      password: 'password',
      entities: [Owner, Sample, Category],
      synchronize: true,
      dropSchema: true,
    }).initialize();

    repo = ds.getRepository(Sample);
    sampleService = new RepositoryService(repo);
    catRepo = ds.getRepository(Category);
    catService = new RepositoryService(catRepo);

    ownerRepo = ds.getRepository(Owner);
    ownerService = new RepositoryService(ownerRepo);
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
    expect(founds.length).toBe(1);

    expect(founds[0].categories?.length).toBe(2);

    await sampleService.removeRelation({
      id: sample.id,
      relationId: cat1.id,
      relationName: 'categories',
    });
  });
});
