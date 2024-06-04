import {
  CreateSampleDto,
  QuerySample,
  Sample,
  UdpateSampleDto,
} from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseEntityService } from '@mdtx/core';

@Injectable()
export class SampleService extends BaseEntityService<
  Sample,
  CreateSampleDto,
  UdpateSampleDto,
  QuerySample
> {}
