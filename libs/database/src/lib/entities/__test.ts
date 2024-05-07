import { DataSource, Type, ObjectLiteral } from '@mdtx/core';

/**
 * Create a test database resource
 * @param entities
 * @returns
 */
export async function testDB<T extends ObjectLiteral>(entities: Type<any>[]) {
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
