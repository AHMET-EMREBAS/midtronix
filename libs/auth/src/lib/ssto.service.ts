import { isDevMode } from '@mdtx/core';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class SSOService {
  private readonly ssos = new Map<string, string>();

  protected log() {
    if (isDevMode(true, false)) {
      console.table(this.ssos);
    }
  }
  set(username: string) {
    const sso = v4();
    this.ssos.set(username, sso);

    this.log();
    return sso;
  }

  get(username: string) {
    const sso = this.ssos.get(username);
    this.log();
    this.ssos.delete(username);
    this.log();
    return sso;
  }
}
