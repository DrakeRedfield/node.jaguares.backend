import postgresService from '../../config';
import { logger } from '../../../utils/services/winston';
import { InventoryLog } from '../../model/inventory-log';
import { errorLoggerHandler } from '../../../utils/services/error';
import { TypeOfMovement } from '../enum/inventory';

export const seedInventoryLog = async () => {
  try {
    const count = await postgresService.dataSource.createQueryBuilder()
      .select()
      .from(InventoryLog, 'inventoryLog').getCount();

    if (!count) {
      await postgresService.dataSource.createQueryBuilder()
        .insert()
        .into(InventoryLog)
        .values(inventoryLogData).execute();
      logger.info("======= InventoryLog saved successfully");
    }
  } catch (error) {
    logger.error("======= Couldn't seed InventoryLog");
    errorLoggerHandler(error);
  }
}

const inventoryLogData = [
  { id: 1, product: { id: 1 }, type: TypeOfMovement.input, user: {id: 1},  quantity: 100 },
  { id: 2, product: { id: 2 }, type: TypeOfMovement.input, user: {id: 1},  quantity: 80 },
  { id: 3, product: { id: 3 }, type: TypeOfMovement.input, user: {id: 1},  quantity: 90 },
  { id: 4, product: { id: 4 }, type: TypeOfMovement.input, user: {id: 1},  quantity: 52 },
  { id: 5, product: { id: 5 }, type: TypeOfMovement.input, user: {id: 1},  quantity: 36 },
]