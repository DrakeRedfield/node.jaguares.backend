import { requireAdminAuth } from "../../../utils/services/auth";
import { getGradeResolver, getGradesPaginated } from "../service";

export default {
  Query: {
    grades: requireAdminAuth((_parent: any, args: any, _context: any, _info: any) => {
      return getGradesPaginated(args);
    }),
    grade: requireAdminAuth((_parent: any, args: any, _context: any, _info: any) => {
      return getGradeResolver(args);
    }),
  }
  
}
