import { ProjectEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  imports: [TypeOrmModule.forFeature([...ProjectEntities])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
