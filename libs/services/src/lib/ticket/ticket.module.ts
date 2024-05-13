import { TicketEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([...TicketEntities])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
