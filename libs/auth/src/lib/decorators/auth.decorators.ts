import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '../guards';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthEnums } from '@mdtx/common';

export function Auth() {
  return applyDecorators(
    ApiBearerAuth(AuthEnums.BEARER),
    UseGuards(AuthGuard)
  );
}
