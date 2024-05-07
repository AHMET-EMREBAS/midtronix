/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataSource, Type } from '@mdtx/core';

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
