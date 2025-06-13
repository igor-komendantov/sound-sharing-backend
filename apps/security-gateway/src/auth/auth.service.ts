import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountsDatabaseService } from 'src/accounts-database/accounts-database.service';

@Injectable()
export class AuthService {
  constructor(private readonly accountsDb: AccountsDatabaseService) {}
  async fakeAuth() {
    const user = await this.accountsDb.accounts.findFirst();

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
