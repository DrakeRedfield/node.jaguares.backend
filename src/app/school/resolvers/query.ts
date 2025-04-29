import { requireAdminAuth } from "../../../utils/services/auth";
import { getSchoolResolver, getSchoolsPaginated } from "../service";

export default {
  Query: {
    schools: requireAdminAuth((_parent, args, _context, _info) => {
      const { user } = _context;
      return getSchoolsPaginated(args, user);
    }),
    school: requireAdminAuth((_parent, args, _context, _info) => {
      const { user } = _context;
      return getSchoolResolver(args, user);
    }),
  }
  
}
