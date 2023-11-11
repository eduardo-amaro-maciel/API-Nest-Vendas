import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/return-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userSerive: UserService) {}

  @Get()
  async findAll(): Promise<ReturnUserDto[]> {
    return (await this.userSerive.findAll()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userSerive.create(createUser);
  }

  @Get('/:userId')
  async getUserByIdUsingRelations(
    @Param('userId') userId: number,
  ): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userSerive.getUserByIdUsingRelations(userId),
    );
  }
}
