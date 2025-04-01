import { userMutationResolvers } from "./mutations";
import { userQueryResolvers } from "./query";

export const userResolvers = {
  ...userMutationResolvers,
  ...userQueryResolvers
}