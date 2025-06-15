import { Controller } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('user')
export class ProfileController {
  constructor(private readonly userService: ProfileService) {}
}
