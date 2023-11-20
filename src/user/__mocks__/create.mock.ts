import { CreateUserDto } from '../dtos/create-user.dto';
import { UserType } from '../enum/user-type.enum';

export const createUserMock: CreateUserDto = {
  cpf: '12345678910',
  email: 'teste@gmail.com',
  name: 'Amaro Maciel',
  password: 'senhatop',
  phone: '123453463',
  typeUser: UserType.User,
};
