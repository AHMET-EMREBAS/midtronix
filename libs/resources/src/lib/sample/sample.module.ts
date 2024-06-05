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
      const timeout = 1000;

      setTimeout(async () => {
        await this.service.saveOne({ name: 'sample 1' });
      }, timeout);

      setTimeout(async () => {
        await this.service.saveOne({ name: 'some 2' });
      }, timeout * 2);
      setTimeout(async () => {
        await this.service.saveOne({ name: 'other 3' });
      }, timeout * 3);
      setTimeout(async () => {
        await this.service.saveOne({ name: 'default 55' });
      }, timeout * 4);
    }
  }
}
