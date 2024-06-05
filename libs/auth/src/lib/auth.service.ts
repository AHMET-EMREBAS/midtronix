import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { InjectAuthUserService } from './auth.provider';
import { LoginDto } from './dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { LoginWithSSO } from './dto/login-sso.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SSOService } from './ssto.service';
import { AuthCredentials } from '@mdtx/common';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    @InjectAuthUserService() protected readonly userService: AuthUserService,
    protected readonly jwt: JwtService,
    protected readonly ssoService: SSOService
  ) {}

  sign(id: number) {
    return this.jwt.sign({ id });
  }

  async verify(token: string) {
    const result = await this.jwt.verify<JwtPayload>(token);
    
    return result;
  }

  async login(body: LoginDto) {
    const { username: outUsername, password: outPassword } = body;
    const found = await this.userService.findOneByUsername(outUsername);

    const { password } = found;
    const isPasswordMatch = await compare(outPassword, password);

    if (isPasswordMatch) {
      const authtoken = await this.sign(found.id);
      return { authtoken };
    }

    throw new BadRequestException('Password does not match!');
  }

  async forgotPassword(body: ForgotPasswordDto) {
    const { username } = body;
    await this.userService.findOneByUsername(username);

    return {
      message: `Recovery email is sent to your email address ${username}`,
    };
  }

  async loginWithSSO(body: LoginWithSSO) {
    const user = await this.userService.findOneByUsername(body.username);
    const sso = this.ssoService.get(body.username);

    if (sso && sso === body.sso) {
      return this.sign(user.id);
    }

    throw new BadRequestException('SSO does not match');
  }
}
