import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UsersModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
