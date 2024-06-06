import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, Sample, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';
import { AdvanceLogger } from '@mdtx/core';
import { SampleController } from './sample.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Sample, SampleView, Category]),
  ],
  controllers: [SampleController],
  providers: [SampleService, AdvanceLogger],
})
export class SampleModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
