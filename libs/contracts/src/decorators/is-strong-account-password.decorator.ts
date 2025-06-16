import { applyDecorators } from '@nestjs/common';
import { IsStrongPassword } from 'class-validator';

export function IsStrongAccountPassword() {
  return applyDecorators(
    IsStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 0,
    }),
  );
}
