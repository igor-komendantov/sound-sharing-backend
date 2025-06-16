import { IsUserId } from '@app/contracts/decorators/is-user-id.decorator';

export class UpdateSelfProfilePayload {
  @IsUserId()
  userId: string;

  nickname?: string;
}
