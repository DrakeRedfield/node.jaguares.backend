import { productMutationSchemas } from "./mutation";
import { productQuerySchemas } from "./query";

export const productSchemas = [
  ...productQuerySchemas,
  ...productMutationSchemas
]