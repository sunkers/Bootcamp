import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getHello(): string {
        return 'Hello World!';
      }
    postHello(): string {
        return 'Hello World!';
      }
    putHello(): string {
        return 'Hello World!';
      }
}
