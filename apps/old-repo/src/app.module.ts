import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
import { ClientDatabaseModule } from './client-database/client-database.module';

@Module({
  imports: [ClientDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
