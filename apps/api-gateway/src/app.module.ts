import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ProfileModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
