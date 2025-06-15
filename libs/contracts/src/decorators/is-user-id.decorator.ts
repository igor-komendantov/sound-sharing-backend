import { applyDecorators } from '@nestjs/common';
import { IsUUID } from 'class-validator';

export function IsUserId() {
  return applyDecorators(
    IsUUID('4', { message: 'userId must be a valid UUID v4' }),
  );
}
