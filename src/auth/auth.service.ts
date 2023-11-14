import { UserService } from './../user/user.service';
import { LoginDto } from './dtos/login.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ReturnLoginDto } from './dtos/return-login.dto';
import { ReturnUserDto } from 'src/user/dtos/return-user.dto';
import { LoginPayloadDto } from './dtos/login-payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException('E-mail ou senha errados!');
    }

    return {
      user: new ReturnUserDto(user),
      accessToken: this.jwtService.sign({ ...new LoginPayloadDto(user) }),
    };
  }
}
