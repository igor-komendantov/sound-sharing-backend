import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();

  async fakeAuth(): Promise<any> {
    // Симуляция получения пользователя из базы данных
    const user = await this.prisma.accounts.findFirst();
    if (!user) {
      throw new Error('Unauthorized');
    }
    return user;
  }
}
