import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ClientDatabaseService } from 'src/client-database/client-database.service';

@Injectable()
export class FakeAuthMiddleware implements NestMiddleware {
  constructor(private clientDb: ClientDatabaseService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // const fakeUserId = 1; // или UUID: 'd1f2...'

    const user = await this.clientDb.accounts.findFirst();

    if (user) {
      (req as any).user = user;
    }

    next();
  }
}
