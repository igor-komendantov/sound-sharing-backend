import { Module } from '@nestjs/common';
import { ProxyModule } from './proxy/proxy.module';
import { AuthModule } from './auth/auth.module';
import { AccountsDatabaseModule } from './accounts-database/accounts-database.module';

@Module({
  imports: [ProxyModule, AuthModule, AccountsDatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
