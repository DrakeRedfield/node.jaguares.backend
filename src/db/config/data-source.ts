import { DataSourceOptions } from 'typeorm';

export const getDbConfig = () => {
  return {
    type: "postgres",
    host: process.env.DB_HOST || 'eCommerce-drake',
    port: +(process.env.DB_PORT || 5432),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    synchronize: process.env.DB_SYNC === 'true',
    entities: [__dirname + '/../model/*.{ts,js}']
  } as DataSourceOptions;
}