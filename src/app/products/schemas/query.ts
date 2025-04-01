const productSchema = `#graphql
  type Query {
    products(page: Int!): Products
    product(id: Int!): Product
  }
`;

const productType = `#graphql
  type Product {
    id: Int
    name: String
    description: String
    image: String
    price: Float
  }

  type Products {
    data: [Product]
    count: Int
    currentPage: Int
    lastPage: Int
    nextPage: Int
    prevPage: Int
  }
`;

export const productQuerySchemas = [
  productSchema,
  productType
];
