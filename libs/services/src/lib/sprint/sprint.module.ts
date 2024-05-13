import { SprintEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SprintController } from './sprint.controller';
import { SprintService } from './sprint.service';

@Module({
  imports: [TypeOrmModule.forFeature([...SprintEntities])],
  controllers: [SprintController],
  providers: [SprintService],
})
export class SprintModule {}
