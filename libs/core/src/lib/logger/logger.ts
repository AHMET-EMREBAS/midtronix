/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger, Provider } from '@nestjs/common';

@Injectable()
export class AdvanceLogger extends Logger {
  constructor(context = 'Logger') {
    super(context);
  }

  override debug(message: any, context?: string | undefined): void;
  override debug(message: any, ...optionalParams: any[]): void;
  override debug(message: unknown, payload?: unknown): void {
    super.log(message);
    console.table({ payload });
  }

  override error(
    message: any,
    stack?: string | undefined,
    context?: string | undefined
  ): void;
  override error(message: any, ...optionalParams: any[]): void;
  override error(message: unknown, error: any): void {
    super.log(message);
    console.table({ error });
  }
}

export function provideAdvanceLogger(context: string): Provider {
  return {
    provide: AdvanceLogger,
    useValue: new AdvanceLogger(context),
  };
}
