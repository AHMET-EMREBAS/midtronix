import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SampleViewService } from './sample-view.service';
import { SampleViewController } from './sample-view.controller';

@Module({
  imports: [EventEmitterModule, TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleController, SampleViewController],
  providers: [SampleService, SampleViewService],
  exports: [SampleService, SampleViewService],
})
export class SampleModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
