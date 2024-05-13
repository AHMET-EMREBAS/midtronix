import { StoreEntities } from '@mdtx/database';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

@Module({
  imports: [TypeOrmModule.forFeature([...StoreEntities])],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
