import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Template, TemplateView } from '@mdtx/entity';
import { TemplateController } from './template.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Template, TemplateView])],
  controllers: [TemplateController],
})
export class TemplateModule {}
