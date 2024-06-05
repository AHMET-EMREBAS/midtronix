import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';
import { AdvanceLogger } from '@mdtx/core';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleController],
  providers: [
    SampleService,
    {
      provide: AdvanceLogger,
      useValue: new AdvanceLogger(SampleModule.name),
    },
  ],
})
export class SampleModule {}
