/* eslint-disable @nx/enforce-module-boundaries */
import { hashSync, genSaltSync, compareSync } from 'bcrypt';

export function hash(value: string) {
  return hashSync(value, genSaltSync(8));
}

export function compareHash(value: string, hashedValue: string) {
  return compareSync(value, hashedValue);
}


