import { applyDecorators } from '@nestjs/common';
import { IsStrongPassword } from 'class-validator';

export function IsStrongAccountPassword() {
  return applyDecorators(IsStrongPassword({ minLength: 8 }));
}
