import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Accounts } from '@prisma/client';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: Accounts | null;
}

export const CurrentUser = createParamDecorator(
  (_data: undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user;
  },
);
