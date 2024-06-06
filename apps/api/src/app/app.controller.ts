import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('current-time')
  currentTime() {
    return new Date();
  }

  
}
