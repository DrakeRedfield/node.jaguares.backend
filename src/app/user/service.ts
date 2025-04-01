import { getUserAndPasswordByEmail } from "../../db/utils/services/user";
import { comparePassword, signJWTSession } from "../../utils/services/auth";

export const loginUserAdminResolver = async (data: { email: string, password: string }) => {
  const user = await getUserAndPasswordByEmail(data.email);
  if(!user)
    throw new Error('Invalid credentials');
  const passCompared = await comparePassword(data.password, user.password);
  if (!passCompared)
    throw new Error('Invalid credentials');

  return signJWTSession(user);
};
