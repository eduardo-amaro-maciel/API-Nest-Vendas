import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/create-address.dto';
import { AddressEntity } from './entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserId } from '../decorators/user-id.decorator';
import { UserType } from '../user/enum/user-type.enum';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Roles(UserType.User)
  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() addressCreateDto: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<AddressEntity> {
    console.log(userId[0]);
    return await this.addressService.create(addressCreateDto, userId);
  }
}
