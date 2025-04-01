import { requireAdminAuth } from "../../../utils/services/auth";
import { createProductResolver, deleteProductResolver, updateProductResolver } from "../service";

export const productsMutationResolvers = {
  Mutation: {
    createProduct: requireAdminAuth((_parent: any, args: any, _context: any, _info: any) => {
      return createProductResolver(args);
    }),
    updateProduct: requireAdminAuth((_parent: any, args: any, _context: any, _info: any) => {
      return updateProductResolver(args);
    }),
    deleteProduct: requireAdminAuth((_parent: any, args: any, _context: any, _info: any) => {
      return deleteProductResolver(args);
    }),
  }
}
