const gradeSchema = `#graphql
  type Query {
    grades(page: Int, onlyOfficial: Boolean): Grades
    grade(id: String!): Grade
  }
`;

const gradeType = `#graphql
  type Grade {
    id: String
    level: Int
    officialLevel: Int
    isOfficial: Boolean
    colorBelt: String
    gradeType: String
  }

  type Grades {
    data: [Grade]
    pagination: PaginationInfo
  }
`;

export default [
  gradeSchema,
  gradeType
];
