import { Length } from 'class-validator';

export class PasswordDto {
  @Length(6, 50)
  password: string;
}
