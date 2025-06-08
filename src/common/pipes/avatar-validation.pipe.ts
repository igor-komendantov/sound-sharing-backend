import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ProfileAvatarValidationPipe implements PipeTransform {
  constructor(private readonly options = { isRequired: false }) {}

  transform(file: Express.Multer.File | undefined) {
    if (!file) {
      if (this.options.isRequired) {
        throw new BadRequestException('Файл обязателен');
      }
      return undefined;
    }

    
  }
}
