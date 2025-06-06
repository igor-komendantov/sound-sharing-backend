import { SetMetadata } from '@nestjs/common';

type IdExtractor = (request: any) => string | number;

export const CheckOwnership = (
  resource: string,
  idExtractor: IdExtractor,
) => {
  return (target: any, key?: any, descriptor?: any) => {
    SetMetadata('checkOwnership', resource)(target, key, descriptor);
    SetMetadata('ownershipIdExtractor', idExtractor)(target, key, descriptor);
  };
};
