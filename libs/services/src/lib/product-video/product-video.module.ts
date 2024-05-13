import { ProductVideoEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVideoController } from './product-video.controller';
import { ProductVideoService } from './product-video.service';

@Module({
  imports: [TypeOrmModule.forFeature([...ProductVideoEntities])],
  controllers: [ProductVideoController],
  providers: [ProductVideoService],
})
export class ProductVideoModule {}
