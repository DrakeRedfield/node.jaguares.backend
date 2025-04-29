const schema = `#graphql
  type Query {
    schools(page: Int): Schools
    school(id: String!): School
  }
`;

const types = `#graphql
  type School {
    id: String
    name: String
    location: String
    coordX: Float
    coordY: Float
  }

  type Schools {
    data: [School]
    pagination: PaginationInfo
  }
`;

export default [
  schema,
  types
];
