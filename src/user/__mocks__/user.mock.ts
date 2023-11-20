import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const UserEntityMock: UserEntity = {
  cpf: '12345678910',
  email: 'teste@gmail.com',
  name: 'Amaro Maciel',
  createdAt: new Date(),
  id: 12,
  password: 'senhatop',
  phone: '123453463',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
