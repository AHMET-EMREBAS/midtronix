import { ISample } from '@mdtx/models';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AppEventService {
  @OnEvent('sample.created')
  insertSample(payload: ISample) {
    // console.log(payload);
  }
}
