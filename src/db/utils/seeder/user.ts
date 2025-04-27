import postgresService from '../../config';
import { logger } from '../../../utils/services/winston';
import { User } from '../../model/User';
import { generatePassword } from '../../../utils/services/auth';
import { errorLoggerHandler } from '../../../utils/services/error';

export const seedAdmin = async () => {
  const defaultUser = {
    email: process.env.DEFAULT_USER_EMAIL || 'admin@admin.com',
    password: process.env.DEFAULT_USER_PASSWORD || 'admin',
    name: process.env.DEFAULT_USER_NAME || 'admin',
    lastName: process.env.DEFAULT_USER_LASTNAME || 'admin',
  };
  try {
    const count = await postgresService.dataSource.createQueryBuilder()
      .select()
      .from(User, 'user')
      .where({ email: defaultUser.email })
      .getCount();

    if (!count) {
      const password = await generatePassword(defaultUser.password);
      await postgresService.dataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values({ email: defaultUser.email, password, name: defaultUser.name, lastName: defaultUser.lastName })
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
