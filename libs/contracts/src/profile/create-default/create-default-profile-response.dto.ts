import { IsUserId } from '@app/contracts/decorators/is-user-id.decorator';

export class CreateDefaultProfileResponse {
  @IsUserId()
  accountId: string;
  nickname: string;
  avatarUrl?: string;
}
