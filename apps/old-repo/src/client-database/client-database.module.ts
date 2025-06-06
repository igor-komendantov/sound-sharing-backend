// client-database.module.ts
import { Global, Module } from '@nestjs/common';
import { ClientDatabaseService } from './client-database.service';

@Global()
@Module({
  providers: [ClientDatabaseService],
  exports: [ClientDatabaseService],
})
export class ClientDatabaseModule {}
