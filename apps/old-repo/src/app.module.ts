import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClientDatabaseModule } from './client-database/client-database.module';
import { FakeAuthMiddleware } from './auth/authentication/fake-auth.middleware';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ClientDatabaseModule, AuthModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FakeAuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
