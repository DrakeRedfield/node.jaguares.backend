import { getProductResolver, getProductsPaginated } from "../service";

export const productsQueryResolvers = {
  Query: {
    products: (_parent: any, args: any, _context: any, _info: any) => {
      return getProductsPaginated(args);
    },
    product: (_parent: any, args: any, _context: any, _info: any) => {
      return getProductResolver(args);
    },
  }
}
