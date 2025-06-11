import { Controller, Get, Req, Res, UseGuards, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { ProxyService } from './proxy/proxy.service';
import { Request, Response } from 'express';

@Controller('api')
export class GatewayController {
  constructor(
    private readonly authService: AuthService,
    private readonly proxyService: ProxyService,
  ) {}

  // Фейковая авторизация
  private async fakeAuth(req: Request): Promise<any> {
    const user = await this.authService.fakeAuth();
    req.user = user;
    return user;
  }

  @Post('*')
  async handlePostRequest(@Req() req: Request, @Res() res: Response) {
    try {
      // Фейковая авторизация
      await this.fakeAuth(req);

      // Определение целевого сервиса по пути
      const targetService = this.getTargetService(req.path);

      if (!targetService) {
        return res.status(404).json({ message: 'Service not found' });
      }

      // Прокси запрос в нужный микросервис
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

  // Метод для определения целевого сервиса по пути запроса
  private getTargetService(path: string): string {
    if (path.startsWith('/order')) {
      return 'http://localhost:4000'; // URL для order-service
    } else if (path.startsWith('/payment')) {
      return 'http://localhost:5000'; // URL для payment-service
    } else if (path.startsWith('/auth')) {
      return 'http://localhost:3000'; // URL для auth-service
    }
    return ''; // Если сервис не найден
  }
}
