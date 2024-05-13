import { UserEmailEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEmailController } from './user-email.controller';
import { UserEmailService } from './user-email.service';

@Module({
  imports: [TypeOrmModule.forFeature([...UserEmailEntities])],
  controllers: [UserEmailController],
  providers: [UserEmailService],
})
export class UserEmailModule {}
