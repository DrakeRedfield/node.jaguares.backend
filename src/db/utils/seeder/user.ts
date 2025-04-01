import postgresService from '../../config';
import { logger } from '../../../utils/services/winston';
import { User } from '../../model/user';
import { generatePassword } from '../../../utils/services/auth';
import { errorLoggerHandler } from '../../../utils/services/error';

export const seedAdmin = async () => {
  try {
    const count = await postgresService.dataSource.createQueryBuilder()
      .select()
      .from(User, 'user')
      .where({ email: 'admin@admin.com' })
      .getCount();

    if (!count) {
      const password = await generatePassword(process.env.PASSWORD || 'admin');
      await postgresService.dataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values({ id: 1, email: 'admin@admin.com', password, name: 'admin', lastName: 'admin' })
        .execute();
      logger.info("======= User saved successfully");
    }
    return true;
  } catch (error) {
    logger.error("======= Couldn't seed User");
    errorLoggerHandler(error);
    return false;
  }
}
