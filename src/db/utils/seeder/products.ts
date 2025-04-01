import postgresService from '../../config';
import { logger } from '../../../utils/services/winston';
import { Product } from '../../model/product';
import { errorLoggerHandler } from '../../../utils/services/error';

export const seedProducts = async () => {
  try {
    const count = await postgresService.dataSource.createQueryBuilder()
      .select()
      .from(Product, 'products').getCount();

    if (!count) {
      await postgresService.dataSource.createQueryBuilder()
        .insert()
        .into(Product)
        .values(productsData).execute();
      logger.info("======= Products saved successfully");
    }
  } catch (error) {
    logger.error("======= Couldn't seed Products");
    errorLoggerHandler(error);
  }
}

const productsData = [
  { 
    id: 1, name: 'Deora II', description: 'Hot Wheel Acceleracer - Deora II Limited Edition, Teku Team', price: 50,
    image: 'https://creations.mattel.com/cdn/shop/files/HWNFT__1_fada3240-7b89-4eb5-aab9-03d07a8dae14.jpg?v=1694032963',
  },
  {
    id: 2, name: 'Power Rage', description: 'Hot Wheel Acceleracer - Power Rage, Teku Team', price: 15,
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1671820/ss_9ca6fbd79aa34da06599315587dcf15b04a41b4b.1920x1080.jpg?t=1706289384',
  },
  {
    id: 3, name: 'Bassline', description: 'Hot Wheel Acceleracer - Bassline, Teku Team', price: 9,
    image: 'https://store-images.s-microsoft.com/image/apps.24432.14265483573012528.d27c0006-7b6a-4841-ad1b-da331568a3f8.6ab04bb0-7ce2-4630-afc4-277cbb336cb1?q=90&w=480&h=270',
  },
  {
    id: 4, name: 'Spinebuster', description: 'Hot Wheel Acceleracer - Spinebuster, Metal Maniac Team', price: 12,
    image: 'https://static.wikia.nocookie.net/acceleracers/images/1/1e/173728561439a83ed48380.jpg/revision/latest',
  },
  {
    id: 5, name: 'RD-06', description: 'Hot Wheel Acceleracer - Spinebuster, Drones', price: 12,
    image: 'https://static.wikia.nocookie.net/acceleracers/images/1/1e/173728561439a83ed48380.jpg/revision/latest',
  },
]