import { TaskEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([...TaskEntities])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
