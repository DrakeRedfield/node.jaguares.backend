import { productsMutationResolvers } from "./mutations";
import { productsQueryResolvers } from "./query";

export const productsResolvers = {
  ...productsMutationResolvers,
  ...productsQueryResolvers
}