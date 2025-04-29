const schema = `#graphql
  type Mutation {
    createSchool(input: CreateSchoolInput!): School!
    updateSchool(input: UpdateSchoolInput!): School!
    deleteSchool(id: String!): String
  }
`;

const types = `#graphql
  input CreateSchoolInput {
    name: String!
    location: String!
    coordX: Float!
    coordY: Float!
  }

  input UpdateSchoolInput {
    id: ID!
    name: String!
    location: String!
    coordX: Float!
    coordY: Float!
  }
`;

export default [
  schema,
  types
];