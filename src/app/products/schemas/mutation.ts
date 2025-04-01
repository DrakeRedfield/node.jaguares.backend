const productSchema = `#graphql
  type Mutation {
    createProduct(product: CreateProductInput!): Product
    updateProduct(product: UpdateProductInput!): Product
    deleteProduct(id: Int!): Int
  }
`;

const productType = `#graphql
  input CreateProductInput {
    name: String!
    description: String!
    image: String!
    price: Float!
  }

  input UpdateProductInput {
    id: Int!
    name: String
    description: String
    image: String
    price: Float
  }
`;

export const productMutationSchemas = [
  productSchema,
  productType
];
