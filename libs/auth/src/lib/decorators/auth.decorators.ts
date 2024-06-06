import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '../guards';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CommonKeys } from '@mdtx/common';

export function Auth() {
  return applyDecorators(
    ApiBearerAuth(CommonKeys.BEARER),
    UseGuards(AuthGuard)
  );
}
