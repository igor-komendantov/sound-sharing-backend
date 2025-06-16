import { CreateAccountPayload } from '@app/contracts/account';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  create(createAccountDto: CreateAccountPayload) {
    return JSON.stringify(createAccountDto);
  }
}
