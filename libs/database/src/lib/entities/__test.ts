/* eslint-disable @nx/enforce-module-boundaries */

import { DataSource, Type } from '@mdtx/core';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * Create a test database resource
 * @param entities
 * @returns
 */
export async function testDB(entities: Type<any>[]) {
  return await new DataSource({
    type: 'postgres',
    database: 'testdb',
    username: 'postgres',
    password: 'password',
    entities,
    synchronize: true,
    dropSchema: true,
  }).initialize();
}

export function testDBOptions(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    database: 'testdb',
    username: 'postgres',
    password: 'password',
    autoLoadEntities: true,
    synchronize: true,
    dropSchema: true,
  };
}
