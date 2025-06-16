import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { AllRpcExceptionsFilter } from '@app/common/exception-filters/AllRpcExceptionsFilter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProfileModule,
    { transport: Transport.TCP, options: { port: 3001 } },
  );
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new AllRpcExceptionsFilter());
  await app.listen();
}
bootstrap();
