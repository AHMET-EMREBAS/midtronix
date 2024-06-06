/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('Api')
    .addBearerAuth({
      type: 'http',
      scheme: 'Bearer',
      name: 'bearer',
    })
    .addGlobalParameters({
      in: 'header',
      name: 'x-orgname',
      description: 'Organization name',
      example: 'main',
    })

    .build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, doc);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
