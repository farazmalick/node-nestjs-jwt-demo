import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './jwt.strategy';

@Module({
  // imports: [UsersModule, PassportModule.register({ session: true })],
  // providers: [AuthService, LocalStrategy, SessionSerializer]

  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '60s' }
  })],
  providers: [AuthService, LocalStrategy, jwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
