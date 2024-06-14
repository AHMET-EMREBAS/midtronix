import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute, AttributeView } from '@mdtx/entities';
import { AttributeService } from './attribute.service';
import { AttributeController } from './attribute.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AttributeViewService } from './attribute-view.service';
import { AttributeViewController } from './attribute-view.controller';

@Module({
  imports: [
    EventEmitterModule,
    TypeOrmModule.forFeature([Attribute, AttributeView]),
  ],
  controllers: [AttributeController, AttributeViewController],
  providers: [AttributeService, AttributeViewService],
  exports: [AttributeService, AttributeViewService],
})
export class AttributeModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
