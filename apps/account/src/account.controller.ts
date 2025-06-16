import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { ACCOUNT_PATTERNS, CreateAccountPayload } from '@app/contracts/account';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @MessagePattern(ACCOUNT_PATTERNS.CREATE)
  create(@Payload() createAccountDto: CreateAccountPayload) {
    return this.accountService.create(createAccountDto);
  }

  // @MessagePattern('removeAccount')
  // remove(@Payload() id: number) {
  //   return this.accountService.remove(id);
  // }
}
