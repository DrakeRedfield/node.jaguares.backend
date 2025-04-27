import { mergeResolvers } from "@graphql-tools/merge";
import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";

const resolversArray = loadFilesSync([
  path.join(__dirname, '../../app/**/resolvers/**/*.{ts,js}'),
  path.join(__dirname, '../../app/commons/resolvers/**/*.{ts,js}')
]);

export const resolvers = mergeResolvers(resolversArray);
