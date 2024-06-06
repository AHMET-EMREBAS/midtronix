import { PublicResource } from '@mdtx/core';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('AppController')
@PublicResource()
@Controller('app')
export class AppController {
  @Get('current-time')
  currentTime() {
    return new Date().toLocaleString();
  }
}
