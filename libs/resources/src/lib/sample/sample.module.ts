import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample, SampleView } from '@mdtx/entities';
import { SampleService } from './sample.service';
import { SampleController } from './sample.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
