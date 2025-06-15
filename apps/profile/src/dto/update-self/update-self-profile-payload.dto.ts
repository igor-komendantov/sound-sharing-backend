import { IsUserId } from '@app/contracts/decorators/is-user-id.decorator';

export class UpdateSelfProfilePayloadGateway {
  @IsUserId()
  userId: string;

  nickname?: string;
}
