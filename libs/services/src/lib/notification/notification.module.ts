import { NotificationEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([...NotificationEntities])],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
