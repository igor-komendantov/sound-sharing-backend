// export interface UpdateProfileInput {
//   accountId: number;
//   nickname?: string;
//   avatarFile?: Express.Multer.File;
// }
import { IsPositive, Length } from 'class-validator';

export class UpdateProfileInput {
  @Length(4, 30)
  nickname?: string;

  @IsPositive()
  accountId: number;

  
  avatarFile?: Express.Multer.File;
}
