const userSchema = `#graphql
  type Mutation {
    loginUserAdmin(email: String!, password: String!): UserLoginResponse
  }
`;

const userType = `#graphql
  type UserLoginResponse {
    token: String!
    expireIn: Int!
    user: UserLoginData
  }

  type UserLoginData {
    id: Int
    email: String
    name: String
    lastName: String
  }
`;

export const userMutationSchemas = [
  userSchema,
  userType
];
