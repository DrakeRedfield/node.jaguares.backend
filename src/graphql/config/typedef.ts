import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import path from 'path';

const typesArray = loadFilesSync([
  path.join(__dirname, '../../app/**/schemas/**/*.{ts,js}'),
  path.join(__dirname, '../../app/commons/schemas/**/*.{ts,js}')
]);

export const typeDefs = mergeTypeDefs(typesArray);
