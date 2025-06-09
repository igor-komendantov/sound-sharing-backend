import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Accounts } from '@prisma/client';
import { CurrentUser } from 'src/auth/authentication/current-user.decorator';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateProfilRequesteDto } from './dto/update-profile/update-profile-request.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get()
  getProfile(@CurrentUser() account: Accounts) {
    return this.profileService.getCurrentUserProfile(account.id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  updateProfile(
    @CurrentUser() account: Accounts,
    @Body() { nickname }: UpdateProfilRequesteDto,
    @UploadedFile() avatar: Express.Multer.File | undefined,
  ) {
    return this.profileService.updateProfile({
      accountId: account.id,
      nickname,
      avatarFile: avatar,
    });
  }
}
