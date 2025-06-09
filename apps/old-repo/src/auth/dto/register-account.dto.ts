import { IsEmail } from 'class-validator';
import { PasswordDto } from './password.dto';

export class RegisterAccountDto extends PasswordDto {
  @IsEmail()
  email: string;
}
