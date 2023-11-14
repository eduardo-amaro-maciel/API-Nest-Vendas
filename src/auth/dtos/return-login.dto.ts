import { ReturnUserDto } from 'src/user/dtos/return-user.dto';

export class ReturnLoginDto {
  user: ReturnUserDto;
  accessToken: string;

  constructor() {}
}
