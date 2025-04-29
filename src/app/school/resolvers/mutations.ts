import { requireAdminAuth } from "../../../utils/services/auth";
import { createSchoolResolver, deleteSchoolResolver, updateSchoolResolver } from "../service";

type CreateSchoolInput = {
  name: string;
  location: string;
  coordX: number;
  coordY: number;
};

type UpdateSchoolInput = {
  id: string;
  name: string;
  location: string;
  coordX: number;
  coordY: number;
};

export default {
  Mutation: {
    createSchool: requireAdminAuth((_parent, args: { input: CreateSchoolInput }, _context, _info) => {
      const { user } = _context;
      const { input } = args;
      return createSchoolResolver(input, user);
    }),
    updateSchool: requireAdminAuth((_parent, args: { input: UpdateSchoolInput }, _context, _info) => {
      const { user } = _context;
      const { input } = args;
      return updateSchoolResolver(input, user);
    }),
    deleteSchool: requireAdminAuth((_parent, args: { id: string }, _context, _info) => {
      const { user } = _context;
      return deleteSchoolResolver(args, user);
    }),
  }
}
