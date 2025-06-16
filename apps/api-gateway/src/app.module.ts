import { Module } from '@nestjs/common';
import { ProfileGatewayModule } from './profile/profile-gateway.module';
import { AccountGatewayModule } from './account/account-gateway.module';

@Module({
  imports: [ProfileGatewayModule, AccountGatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
