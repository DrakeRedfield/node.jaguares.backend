import { takeElements } from '../../../utils/constant/pagination';
import postgresService from '../../config'
import { Product } from '../../model/product';

export const getProducts = ({ page }: { page: number }) => {
  const repository = postgresService.getRepository(Product);
  return repository.findAndCount({
    order: { id: 'ASC' },
    take: takeElements,
    skip: (page-1)*takeElements
  });
}

export const getProduct = ({ id }: { id: number }) => {
  const repository = postgresService.getRepository(Product);
  return repository.findOneOrFail({ where: { id } });
}

export const createProduct = (data: Partial<Product>) => {
  const repository = postgresService.getRepository(Product);
  return repository.save({
    description: data.description,
    image: data.image,
    name: data.name,
    price: data.price
  });
}

export const updateProduct = async (data: Partial<Product>) => {
  const repository = postgresService.getRepository(Product);
  const product = await repository.findOneByOrFail({id: data.id});
  product.image = data.image || product.image;
  product.description = data.description || product.description;
  product.name = data.name || product.name;
  product.price = data.price || product.price;
  return repository.save(product);
}

export const deleteProduct = async (data: Partial<Product>) => {
  const repository = postgresService.getRepository(Product);
  const product = await repository.findOneByOrFail({ id: data.id });
  if (!product) return null;
  const result = await repository.softDelete({id: data.id});
  if(!result.affected) return null;
  return data.id;
}
