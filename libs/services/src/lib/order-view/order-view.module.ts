import { OrderViewEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderViewController } from './order-view.controller';
import { OrderViewService } from './order-view.service';

@Module({
  imports: [TypeOrmModule.forFeature([...OrderViewEntities])],
  controllers: [OrderViewController],
  providers: [OrderViewService],
})
export class OrderViewModule {}
