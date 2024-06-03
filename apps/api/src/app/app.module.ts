import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TemplateModule } from './template';
import { TemplateSubscriber } from '@mdtx/entity';

const isDev = process.env.NODE_ENV == 'development';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
      renderPath: isDev ? 'client-app' : '',
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      synchronize: true,
      dropSchema: true,
      database: 'tmp/template.sqlite',
      autoLoadEntities: true,
      subscribers: [TemplateSubscriber],
    }),
    TemplateModule,
  ],
})
export class AppModule {}
