import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product, ProductView } from '@mdtx/entities';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ProductViewService } from './product-view.service';
import { ProductViewController } from './product-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Product, ProductView]),
  ],
  controllers: [ProductController, ProductViewController],
  providers: [ProductService, ProductViewService],
  exports: [ProductService, ProductViewService],
})
export class ProductModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
