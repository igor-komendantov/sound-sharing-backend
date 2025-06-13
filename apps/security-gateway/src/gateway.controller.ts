import { Controller, Req, Res, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { ProxyService } from './proxy/proxy.service';
import { Request, Response } from 'express';

import { serviceConfig } from './services.config';

@Controller('api')
export class GatewayController {
  constructor(
    private readonly authService: AuthService,
    private readonly proxyService: ProxyService,
  ) {}

  private async fakeAuth(req: Request): Promise<any> {
    const user = await this.authService.fakeAuth();
    req.user = user;
    return user;
  }

  @Post('*')
  async handlePostRequest(@Req() req: Request, @Res() res: Response) {
    try {
      await this.fakeAuth(req);

      const targetService = this.getTargetService(req.path);

      if (!targetService) {
        return res.status(404).json({ message: 'Service not found' });
      }

      const response = await this.proxyService.proxyRequest(
        targetService,
        req.method,
        req.body,
        req.headers,
      );

      res.status(200).json(response);
    } catch (err) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }

  private getTargetService(path: string): string {
    // if (path.startsWith('/order')) {
    //   return serviceConfig.orderService;
    // } else if (path.startsWith('/payment')) {
    //   return serviceConfig.paymentService;
    // } else if (path.startsWith('/auth')) {
    //   return serviceConfig.authService;
    // }
    // return ''; // Если сервис не найден
    return serviceConfig.orderService;
  }
}
