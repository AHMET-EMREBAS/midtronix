import { CategoryEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([...CategoryEntities])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
