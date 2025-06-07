import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
