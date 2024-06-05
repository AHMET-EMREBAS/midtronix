import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';
import { AdvanceLogger } from '@mdtx/core';
import { SampleController } from './sample.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleController],
  providers: [SampleService, AdvanceLogger],
})
export class SampleModule {}
