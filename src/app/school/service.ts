import { School } from "../../db/model/School";
import { getSchools, getSchool, createSchool, updateSchool, deleteSchool } from "../../db/utils/services/school"
import { AuthUser } from "../../utils/interfaces/auth";
import { getPaginationResponse } from "../../utils/services/pagination";

export const getSchoolsPaginated = async ({ page = 1 }: { page: number }, user: AuthUser) => {
  const [grades, count] = await getSchools({ page, userId: user.id });
  return getPaginationResponse(grades, count, page);
};

export const getSchoolResolver = async ({ id }: { id: string }, user: AuthUser) => {
  return getSchool({ id, userId: user.id });
};

export const createSchoolResolver = async (data: Partial<School>, user: AuthUser) => {
  return createSchool({ ...data, ownerId: user.id });
};

export const updateSchoolResolver = async (data: Partial<School>, user: AuthUser) => {
  return updateSchool({ ...data, ownerId: user.id });
};

export const deleteSchoolResolver = async (data: Partial<School>, user: AuthUser) => {
  return deleteSchool({ ...data, ownerId: user.id });
};
