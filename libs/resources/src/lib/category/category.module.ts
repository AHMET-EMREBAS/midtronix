import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, CategoryView } from '@mdtx/entities';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CategoryViewService } from './category-view.service';
import { CategoryViewController } from './category-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Category, CategoryView]),
  ],
  controllers: [CategoryController, CategoryViewController],
  providers: [CategoryService, CategoryViewService],
  exports: [CategoryService, CategoryViewService],
})
export class CategoryModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
