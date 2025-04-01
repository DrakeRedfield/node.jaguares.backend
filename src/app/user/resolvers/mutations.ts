import { loginUserAdminResolver } from "../service";

export const userMutationResolvers = {
  Mutation: {
    loginUserAdmin: (_parent: any, args: any, _context: any, _info: any) => {
      return loginUserAdminResolver(args);
    },
  }
}
