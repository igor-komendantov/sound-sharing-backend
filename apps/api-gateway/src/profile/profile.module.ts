import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [
    ClientsModule.register([
      {
        name: 'PROFILES_CLIENT',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
})
export class ProfileModule {}
