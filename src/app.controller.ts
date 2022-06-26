import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  // @Post()
  // login(@Request() req): any {
  //   return req.user;
  // }

  // @UseGuards(AuthenticatedGuard)
  // @Get('protected')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @UseGuards(LocalAuthGuard)
  @Post()
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
