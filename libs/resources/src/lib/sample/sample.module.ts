import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';
import { AdvanceLogger, isDevMode } from '@mdtx/core';
import { SampleController } from './sample.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleController],
  providers: [SampleService, AdvanceLogger],
})
export class SampleModule implements OnModuleInit {
  constructor(protected readonly service: SampleService) {}

  async onModuleInit() {
    if (isDevMode(true, false)) {
      await this.service.saveOne({ name: 'sample 1' });
      await this.service.saveOne({ name: 'some 2' });
      await this.service.saveOne({ name: 'other 3' });
      await this.service.saveOne({ name: 'default 55' });
    }
  }
}
