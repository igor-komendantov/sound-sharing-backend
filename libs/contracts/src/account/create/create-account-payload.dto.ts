import { IsStrongAccountPassword } from '@app/contracts/decorators/is-strong-account-password.decorator';
import { IsEmail } from 'class-validator';

export class CreateAccountPayload {
  @IsEmail()
  email: string;
  @IsStrongAccountPassword()
  password: string;
}
