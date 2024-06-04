import {
  CreateSampleDto,
  QuerySample,
  Sample,
  UdpateSampleDto,
} from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SampleService extends BaseEntityService<
  Sample,
  CreateSampleDto,
  UdpateSampleDto,
  QuerySample
> {
  constructor(@InjectRepository(Sample) repo: Repository<Sample>) {
    super(repo);
  }
}
