import { Controller, Get } from '@nestjs/common';
import { ClientDatabaseService } from 'src/client-database/client-database.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly db: ClientDatabaseService) {}

  @Get('create-account')
  async createAccount() {
    const profile = await this.db.profiles.findFirst();
    return profile;
  }
}
