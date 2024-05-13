import { MessageEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [TypeOrmModule.forFeature([...MessageEntities])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
