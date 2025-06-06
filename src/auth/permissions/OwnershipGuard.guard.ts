import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class OwnershipGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Получаем имя ресурса (например, 'soundPack')
    const resource = this.reflector.get<string>(
      'checkOwnership',
      context.getHandler(),
    );
    if (!resource) {
      return true; // Если декоратор не задан, пропускаем
    }

    // Получаем функцию для извлечения ID из запроса
    const idExtractor = this.reflector.get<(req: any) => any>(
      'ownershipIdExtractor',
      context.getHandler(),
    );
    if (!idExtractor) {
      throw new Error(
        'Id extractor function is not defined in CheckOwnership decorator',
      );
    }

    const resourceId = idExtractor(request);
    if (!resourceId) {
      throw new ForbiddenException(`Resource ID not found in request`);
    }

    const user = request.user; // предполагается, что юзер уже авторизован и лежит в request.user

    // Тут должна быть логика проверки владения, например:
    // const owns = await this.checkOwnership(user.id, resource, resourceId);
    // Для примера — заглушка:
    const owns = await this.mockCheckOwnership(user.id, resource, resourceId);

    if (!owns) {
      throw new ForbiddenException(`User does not own this ${resource}`);
    }

    return true;
  }

  private async mockCheckOwnership(
    userId: number,
    resource: string,
    resourceId: any,
  ): Promise<boolean> {
    // TODO: заменить на реальную проверку из базы
    console.log(
      `Checking ownership for user ${userId} on ${resource} ${resourceId}`,
    );
    return true;
  }
}
