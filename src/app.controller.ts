import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // GET
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('hi')
  postHello(): string {
    return this.appService.getHello();
  }
}
