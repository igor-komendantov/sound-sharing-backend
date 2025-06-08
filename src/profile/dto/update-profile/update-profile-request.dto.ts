import { Length } from 'class-validator';

export class UpdateProfilRequesteDto {
  @Length(4, 30)
  nickname?: string;
}
