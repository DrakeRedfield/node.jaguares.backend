import { productSchemas } from "../../app/products/schemas";
import { userSchemas } from "../../app/user/schemas";

export const typeDefs = [
  `#graphql
    type paginationInfo {
      next: Int
      pages: Int
      count: Int
      prev: Int
    }
  `,
  ...productSchemas,
  ...userSchemas
];
