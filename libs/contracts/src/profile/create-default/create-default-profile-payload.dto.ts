import { IsUserId } from '@app/contracts/decorators/is-user-id.decorator';

export class CreateDefaultProfilePayload {
  @IsUserId()
  accountId: string;
}
