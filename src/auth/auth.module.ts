import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ProfileModule } from 'src/profile/profile.module';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';

@Module({
  imports: [ProfileModule],
  controllers: [AuthController],
  providers: [AuthService, PasswordService],
})
export class AuthModule {}
