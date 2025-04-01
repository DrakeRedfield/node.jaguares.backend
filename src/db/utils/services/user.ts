import postgresService from '../../config'
import { User } from "../../model/user";

export const getUserAndPasswordByEmail = (email: string) => {
  const repository = postgresService.getRepository(User);
  return repository.findOne({
    select: ['email', 'password', 'id', 'name', 'lastName'],
    where: { email }
  });
}

export const getUserByEmail = (email: string) => {
  const repository = postgresService.getRepository(User);
  return repository.findOneOrFail({
    where: { email }
  });
}