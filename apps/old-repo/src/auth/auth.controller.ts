import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAccountDto } from './dto/register-account.dto';
import { ProfileService } from 'src/profile/profile.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly profileService: ProfileService,
  ) {}

  @Post('register-account')
  async registerAccount(@Body() dto: RegisterAccountDto) {
    const account = await this.auth.registerAccount(dto);
    const profile = await this.profileService.createInitialProfile(account.id);

    return { account, profile };
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.auth.login(dto);
  }
}
