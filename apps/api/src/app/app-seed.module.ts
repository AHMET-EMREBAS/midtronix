import { Category } from '@mdtx/database';
import { Module, OnModuleInit } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
})
export class AppSeedModule implements OnModuleInit {
  constructor(
    @InjectRepository(Category) protected readonly cat: Repository<Category>
  ) {}
  async onModuleInit() {
    await this.cat.save({ name: 'category 1' });
    await this.cat.save({ name: 'category 2' });
    await this.cat.save({ name: 'category 3' });
    await this.cat.save({ name: 'category 4' });
    await this.cat.save({ name: 'category 5' });
  }
}
