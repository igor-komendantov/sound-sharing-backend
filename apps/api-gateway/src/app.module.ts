import { Module } from '@nestjs/common';
import { ProfileModule } from 'apps/profile/src/profile.module';

@Module({
  imports: [ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
