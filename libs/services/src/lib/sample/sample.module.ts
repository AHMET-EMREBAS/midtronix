import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sample, SampleView } from '@mdtx/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
})
export class SampleModule {}
