// client-database.module.ts
import { Global, Module } from '@nestjs/common';
import { AccountsDatabaseService } from './accounts-database.service';

@Global()
@Module({
  providers: [AccountsDatabaseService],
  exports: [AccountsDatabaseService],
})
export class AccountsDatabaseModule {}
