import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { InjectAuthUserService } from './auth.provider';
import { LoginDto } from './dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { LoginWithSSODto } from './dto/login-sso.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SSOService } from './ssto.service';
import { JwtPayload } from './jwt-payload';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { AdvanceLogger, UpdatePasswordResult } from '@mdtx/core';
import { AuthEnums } from '@mdtx/common';

@Injectable()
export class AuthService {
  protected logger: AdvanceLogger;
  constructor(
    @InjectAuthUserService() protected readonly userService: AuthUserService,
    protected readonly jwt: JwtService,
    protected readonly ssoService: SSOService
  ) {
    this.logger = new AdvanceLogger(AuthService.name);
  }

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

    const { password: hashedPassword } = found;

    this.logger.debug(this.login.name, { body, found });
    const isPasswordMatch = await compare(outPassword, hashedPassword);
    if (isPasswordMatch) {
      const token = await this.sign(found.id);
      this.logger.debug('Signed the token', { token });
      return { [AuthEnums.ACCESS_TOKEN_NAME]: token };
    }

    this.logger.debug('Wrong password');
    throw new BadRequestException('Password does not match!');
  }

  async forgotPassword(body: ForgotPasswordDto) {
    const { username } = body;
    await this.userService.findOneByUsername(username);

    this.logger.debug("Recovery email is sent to user' email.");
    return {
      message: `Recovery email is sent to your email address ${username}`,
    };
  }

  async ssoLogin(body: LoginWithSSODto) {
    const user = await this.userService.findOneByUsername(body.username);
    const sso = this.ssoService.get(body.username);

    if (sso && sso === body.sso) {
      const token = this.sign(user.id);
      this.logger.debug('Signed the token'), {};
      return { [AuthEnums.ACCESS_TOKEN_NAME]: token };
    }

    throw new BadRequestException('SSO does not match');
  }

  async updatePassword(
    userId: number,
    body: UpdatePasswordDto
  ): Promise<UpdatePasswordResult> {
    this.logger.debug(this.updatePassword.name, { userId, body });
    const foundUser = await this.userService.findOneById(userId);

    this.logger.debug(this.updatePassword.name, foundUser);

    if (await compare(body.password, foundUser.password)) {
      await this.userService.updatePassword(userId, body.newPassword);
      return { message: 'Successfully updated the password' };
    }

    throw new BadRequestException('Wrong Password');
  }
}
