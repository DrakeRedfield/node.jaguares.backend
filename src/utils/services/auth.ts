import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../db/model/user';
import { Customer } from '../../db/model/customer';

export const generatePassword = (password: string) => {
  return bcrypt.hash(password, 10);
}

export const comparePassword = (password: string, encryptedPassword: string) => {
  return bcrypt.compare(password, encryptedPassword);
}

export const signJWTSession = (user: Partial<User> | Partial<Customer>) => {
  const { id, email, name, lastName } = user;
  const expirationTime = +(process.env.LOGIN_EXP_TIME_HOURS || 8)
  const expirationHours = `${expirationTime}h`;
  const token = jwt.sign({ id, email, name, lastName }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: expirationHours,
  } as jwt.SignOptions);
  return {
    user,
    token,
    expireIn: 3600000 * expirationTime // expireIn MS
  }
}

export const getDecodedPayloadJWT = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY || '');
}

export const requireAdminAuth = (resolver: any) => (_parent: any, args: any, _context: any, _info: any) => {
  if(!_context.user) throw new Error('Unauthorized');
  return resolver(_parent, args, _context, _info);
}
