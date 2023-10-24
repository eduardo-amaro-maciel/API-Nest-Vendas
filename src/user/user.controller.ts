import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userSerive: UserService) {}

  @Get()
  async findAll() {
    return this.userSerive.findAll();
  }

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return this.userSerive.create(createUser);
  }
}
