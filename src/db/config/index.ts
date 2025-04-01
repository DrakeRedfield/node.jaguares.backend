import { DataSource, EntityTarget, Repository, Entity, ObjectLiteral } from 'typeorm';
import { getDbConfig } from "./data-source";
import { seedDB } from "../utils/seeder";
import { logger } from '../../utils/services/winston';

class PostgresqlService {

  dataSource: DataSource;

  connectDB() {
    this.dataSource = new DataSource(getDbConfig());
    this.dataSource.initialize()
      .then((conn) => {
        seedDB();
        logger.info("Data Source has been initialized!");
      })
      .catch((err) => {
        logger.info("Error during Data Source initialization:", err);
      })
  }

  getRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Repository<T> {
    return this.dataSource.getRepository(entity);
  }

  getManager() {
    return this.dataSource.manager;
  }
}

export default new PostgresqlService();