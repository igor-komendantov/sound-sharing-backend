import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountPayload } from './dto/create/create-account-payload.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ACCOUNT_PATTERNS } from '@app/contracts/account';
import { CreateAccountResponse } from './dto/create/create-account-response.dto';

@Injectable()
export class AccountService {
  constructor(@Inject('ACCOUNT_CLIENT') private accountClient: ClientProxy) {}

  create(createAccountDto: CreateAccountPayload) {
    return this.accountClient.send<CreateAccountResponse, CreateAccountPayload>(
      ACCOUNT_PATTERNS.CREATE,
      createAccountDto,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
