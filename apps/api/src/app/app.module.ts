import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { isDevMode } from '@mdtx/core';
import { SampleModule } from '@mdtx/resources';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';
import { EntitySubscriber } from './entity.subscriber';
import { AppEventHandler } from './app.events';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '@mdtx/auth';
import { MockUserService } from './mock-user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot({
      global: true,
      delimiter: '.',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
      renderPath: isDevMode('client-app', ''),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'testdb',
      username: 'postgres',
      password: 'password',
      // type: 'better-sqlite3',
      // database: 'tmp/database/dev.sqlite',
      autoLoadEntities: true,
      subscribers: [EntitySubscriber],
      synchronize: true,
      dropSchema: true,
      logger: 'debug',
      logging: isDevMode(true, false),
    }),
    AuthModule.configure(MockUserService),
    SampleModule,
  ],
  providers: [AppEventHandler, EventEmitter2, EntitySubscriber],
})
export class AppModule {}
