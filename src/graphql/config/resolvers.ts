import { productsResolvers } from "../../app/products/resolvers";
import { userResolvers } from "../../app/user/resolvers";

export const resolvers = {
  Query: {
    ...productsResolvers.Query,
    ...userResolvers.Query
  },
  Mutation: {
    ...productsResolvers.Mutation,
    ...userResolvers.Mutation
  }
};
