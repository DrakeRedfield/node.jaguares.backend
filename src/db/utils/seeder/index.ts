import { seedInventory } from "./inventory";
import { seedInventoryLog } from "./inventory-log";
import { seedProducts } from "./products"
import { seedAdmin } from "./user";

export const seedDB = async () => {
  const adminSaved = await seedAdmin();
  if (adminSaved) {
    await seedProducts();
    await seedInventory();
    await seedInventoryLog();
  }
}