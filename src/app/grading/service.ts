import { getGrade, getGrades } from "../../db/utils/services/grading"
import { getPaginationResponse } from "../../utils/services/pagination";

export const getGradesPaginated = async ({ page = 1, onlyOfficial = false }: { page: number, onlyOfficial: boolean }) => {
  const [grades, count] = await getGrades({ page, onlyOfficial });
  return getPaginationResponse(grades, count, page);
};

export const getGradeResolver = async ({ id }: { id: string }) => {
  return getGrade({ id });
};
