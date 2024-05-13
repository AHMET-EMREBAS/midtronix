import { UserPhoneEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPhoneController } from './user-phone.controller';
import { UserPhoneService } from './user-phone.service';

@Module({
  imports: [TypeOrmModule.forFeature([...UserPhoneEntities])],
  controllers: [UserPhoneController],
  providers: [UserPhoneService],
})
export class UserPhoneModule {}
