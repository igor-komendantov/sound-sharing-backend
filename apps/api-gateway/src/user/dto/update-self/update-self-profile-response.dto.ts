import { IsUserId } from '@app/contracts/decorators/is-user-id.decorator';

export class UpdateSelfProfileResponseGateway {
  @IsUserId()
  userId: string;

  nickname?: string;
}
