import { Length } from 'class-validator';

export class CreateProfileDto {
  @Length(4, 20)
  nickname: string;
}
