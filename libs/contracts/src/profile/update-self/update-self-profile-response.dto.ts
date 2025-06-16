import { IsUserId } from '@app/contracts/decorators/is-user-id.decorator';

export class UpdateSelfProfileResponse {
  @IsUserId()
  userId: string;

  nickname?: string;
}
