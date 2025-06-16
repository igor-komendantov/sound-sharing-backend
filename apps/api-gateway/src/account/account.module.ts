import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_CLIENT',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
})
export class AccountModule {}
