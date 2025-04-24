import { seedAdmin } from "./user";

export const seedDB = async () => {
  const adminSaved = await seedAdmin();
}