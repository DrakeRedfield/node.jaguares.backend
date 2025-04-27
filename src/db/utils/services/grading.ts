import { takeElements } from '../../../utils/constant/pagination';
import postgresService from '../../config'
import { Grade } from '../../model/Grade';

export const getGrades = async ({ page = 1, onlyOfficial = false }: { page?: number, onlyOfficial?: boolean }) => {
  const repository = postgresService.getRepository(Grade);
  const where = onlyOfficial ? { isOfficial: true } : {};
  return repository.findAndCount({
    order: { id: 'ASC' },
    take: takeElements,
    skip: (page-1)*takeElements,
    where
  });
}

export const getGrade = async ({ id }: { id: string }) => {
  const repository = postgresService.getRepository(Grade);
  return repository.findOneOrFail({ where: { id } });
}
