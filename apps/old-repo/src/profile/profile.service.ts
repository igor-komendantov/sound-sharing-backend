import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes } from 'node:crypto';
import { ClientDatabaseService } from 'src/client-database/client-database.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileInput } from './interface/profile-service/update-profile.input';
import { isEmpty } from 'class-validator';

@Injectable()
export class ProfileService {
  constructor(private clientDb: ClientDatabaseService) {}

  async createInitialProfile(accountId: number) {
    const account = await this.clientDb.accounts.findFirst({
      where: { id: accountId },
    });
    if (!account) {
      throw new NotFoundException();
    }
    const randomNickname = this.generateNickname();
    const profile = await this.clientDb.profiles.create({
      data: {
        accountId: account.id,
        nickname: randomNickname,
      },
    });
    return profile;
  }

  async createProfile(accountId: number, profileData: CreateProfileDto) {
    const account = await this.clientDb.accounts.findFirst({
      where: { id: accountId },
    });

    if (!account) {
      throw new NotFoundException();
    }

    const profile = await this.clientDb.profiles.create({
      data: {
        accountId: account.id,
        nickname: profileData.nickname,
      },
    });

    return profile;
  }

  private generateNickname() {
    return randomBytes(15)
      .toString('base64')
      .replace(/[^a-zA-Z0-9]/g, '')
      .slice(0, 15);
  }

  async getCurrentUserProfile(accountId: number) {
    const profile = await this.clientDb.profiles.findFirst({
      where: { accountId },
    });

    if (!profile) {
      throw new NotFoundException('Profile of account not found');
    }

    return profile;
  }

  async updateProfile({ accountId, nickname, avatarUrl }: UpdateProfileInput) {
    const profile = await this.clientDb.profiles.findFirst({
      where: { accountId },
    });

    if (!profile) {
      throw new BadRequestException('Profile of account not found');
    }

    if(nickname === '')
  }
}
