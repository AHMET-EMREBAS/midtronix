import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { isDevMode } from '@mdtx/core';
import { CategoryModule, SampleModule, SampleService } from '@mdtx/resources';
import { EventEmitter2, EventEmitterModule } from '@nestjs/event-emitter';
import { AppEventService } from './app-event.service';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard, AuthModule } from '@mdtx/auth';
import { MockUserService } from './mock-user.service';
import { AppController } from './app.controller';
import { APP_GUARD } from '@nestjs/core';

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
      synchronize: true,
      dropSchema: true,
      logger: 'debug',
      logging: isDevMode(true, false),
    }),
    AuthModule.configure(MockUserService),
    SampleModule,
    CategoryModule,
  ],
  providers: [
    AppEventService,
    EventEmitter2,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
  controllers: [AppController],
})
export class AppModule implements OnModuleInit {
  constructor(protected readonly service: SampleService) {}

  async onModuleInit() {
    let i = 1;
    setTimeout(async () => {
      await this.service.saveOne({ name: 'sample 1' });
    }, i++ * 1000);
    setTimeout(async () => {
      await this.service.saveOne({ name: 'sample 2' });
    }, i++ * 1000);
    setTimeout(async () => {
      await this.service.saveOne({ name: 'sample 3' });
    }, i++ * 1000);
    setTimeout(async () => {
      await this.service.saveOne({ name: 'sample 4' });
    }, i++ * 1000);
    setTimeout(async () => {
      await this.service.saveOne({ name: 'other 5' });
    }, i++ * 1000);
    setTimeout(async () => {
      await this.service.saveOne({ name: 'other 6' });
    }, i++ * 1000);
    setTimeout(async () => {
      await this.service.saveOne({ name: 'other 7' });
    }, i++ * 1000);
  }
}
