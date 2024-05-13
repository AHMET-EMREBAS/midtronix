import { UserAddressEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddressController } from './user-address.controller';
import { UserAddressService } from './user-address.service';

@Module({
  imports: [TypeOrmModule.forFeature([...UserAddressEntities])],
  controllers: [UserAddressController],
  providers: [UserAddressService],
})
export class UserAddressModule {}
