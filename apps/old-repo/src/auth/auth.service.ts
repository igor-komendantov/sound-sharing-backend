import {
  BadRequestException,
  Body,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { RegisterAccountDto } from './dto/register-account.dto';
import { ClientDatabaseService } from 'src/client-database/client-database.service';
import { PasswordService } from './password.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private clientDb: ClientDatabaseService,
    private passwordService: PasswordService,
  ) {}
  async registerAccount(dto: RegisterAccountDto) {
    const accountWithSameEmail = await this.clientDb.accounts.findFirst({
      where: { email: dto.email },
    });

    if (accountWithSameEmail) {
      throw new ConflictException('Account with this email already exists');
    }

    const passwordHash = await this.passwordService.hashPassword(dto.password);

    const account = await this.clientDb.accounts.create({
      data: {
        email: dto.email,
        passwordHash,
      },
    });

    return account;
  }

  async login({ email, password }: LoginDto) {
    const account = await this.clientDb.accounts.findFirst({
      where: { email },
    });

    if (!account) {
      throw new BadRequestException("Account with such email doesn't exist");
    }

    const { passwordHash } = account;

    return '123';
  }
}
