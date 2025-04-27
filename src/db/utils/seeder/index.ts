import { seedGrades } from "./grade";
import { seedAdmin } from "./user";

export const seedDB = async () => {
  const [adminSaved, gradesSaved] = await Promise.all([seedAdmin(), seedGrades()])
}