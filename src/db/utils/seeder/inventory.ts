import postgresService from '../../config';
import { logger } from '../../../utils/services/winston';
import { Inventory } from '../../model/inventory';
import { errorLoggerHandler } from '../../../utils/services/error';

export const seedInventory = async () => {
  try {
    const count = await postgresService.dataSource.createQueryBuilder()
      .select()
      .from(Inventory, 'inventory').getCount();

    if (!count) {
      await postgresService.dataSource.createQueryBuilder()
        .insert()
        .into(Inventory)
        .values(inventoryData).execute();
      logger.info("======= Inventory saved successfully");
    }
  } catch (error) {
    logger.error("======= Couldn't seed Inventory");
    errorLoggerHandler(error);
  }
}

const inventoryData = [
  { id: 1, product: { id: 1 }, quantity: 100 },
  { id: 2, product: { id: 2 }, quantity: 80 },
  { id: 3, product: { id: 3 }, quantity: 90 },
  { id: 4, product: { id: 4 }, quantity: 52 },
  { id: 5, product: { id: 5 }, quantity: 36 },
]