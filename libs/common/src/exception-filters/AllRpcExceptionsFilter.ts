import { Catch } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';

function hasGetResponse(obj: unknown): obj is { getResponse: () => unknown } {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'getResponse' in obj &&
    typeof (obj as { getResponse?: unknown }).getResponse === 'function'
  );
}

@Catch()
export class AllRpcExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception: unknown): Observable<unknown> {
    console.error('🔥 Микросервис поймал исключение:', exception);

    if (exception instanceof RpcException) {
      const errorResponse = exception.getError();
      return throwError(() => errorResponse);
    }

    if (hasGetResponse(exception)) {
      const response = exception.getResponse();
      return throwError(() => response);
    }

    const message =
      exception &&
      typeof exception === 'object' &&
      'message' in exception &&
      typeof (exception as { message?: unknown }).message === 'string'
        ? (exception as { message: string }).message
        : 'Unknown error';

    return throwError(() => ({
      status: 'error',
      message,
    }));
  }
}
