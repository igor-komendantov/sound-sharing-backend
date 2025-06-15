import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProfileService {
  constructor(@Inject('PROFILES_CLIENT') private profilesClient: ClientProxy) {}
  getHello(id: string) {
    return this.profilesClient.send('hello.world', {
      hello: 'world',
      my: 'name',
      id
    });
  }
}
