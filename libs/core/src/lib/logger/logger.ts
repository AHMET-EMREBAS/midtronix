/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AdvanceLogger extends Logger {
  constructor(context = 'Logger') {
    super(context);
  }

  override debug(message: any, context?: string | undefined): void;
  override debug(message: any, ...optionalParams: any[]): void;
  override debug(message: unknown, payload?: unknown): void {
    super.debug(message);
    console.table({ payload });
  }
}
