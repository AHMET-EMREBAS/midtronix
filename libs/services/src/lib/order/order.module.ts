import { OrderEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([...OrderEntities])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
