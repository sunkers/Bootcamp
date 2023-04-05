import { Controller, Get, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly appService: AuthService) {}

    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
  
    @Post()
    postHello(): string {
      return this.appService.postHello();
    }
  
    @Put()
    putHello(): string {
      return this.appService.putHello();
    }
}
