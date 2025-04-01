import { userMutationSchemas } from "./mutation";
import { userQuerySchemas } from "./query";

export const userSchemas = [
  // ...userQuerySchemas,
  ...userMutationSchemas
]