import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../../db/utils/services/products"
import { getPaginationResponse } from "../../utils/services/pagination";

interface IProductInput {
  name: string;
  description: string;
  image: string;
  price: number;
}

export const getProductsPaginated = async ({ page }: { page: number }) => {
  const [products, count] = await getProducts({ page });
  return getPaginationResponse(products, count, page);
};

export const getProductResolver = async ({ id }: { id: number }) => {
  return getProduct({ id });
};

export const createProductResolver = async (data: { product: IProductInput }) => {
  return createProduct(data.product);
};

export const updateProductResolver = async (data: { product: IProductInput }) => {
  return updateProduct(data.product);
};

export const deleteProductResolver = async (data: { id: number }) => {
  return deleteProduct(data);
};
