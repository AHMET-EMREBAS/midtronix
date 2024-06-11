import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email, EmailView } from '@mdtx/entities';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EmailViewService } from './email-view.service';
import { EmailViewController } from './email-view.controller';

@Module({
  imports: [EventEmitterModule, TypeOrmModule.forFeature([Email, EmailView])],
  controllers: [EmailController, EmailViewController],
  providers: [EmailService, EmailViewService],
  exports: [EmailService, EmailViewService],
})
export class EmailModule implements OnModuleInit {
  async onModuleInit() {
    // TODO:
  }
}
