import { takeElements } from '../../../utils/constant/pagination';
import postgresService from '../../config';
import { School } from '../../model/School';

export const getSchools = async ({ page = 1, userId }: { page?: number, userId: string }) => {
  const repository = postgresService.getRepository(School);
  return repository.findAndCount({
    take: takeElements,
    skip: (page-1)*takeElements,
    where : {
      owner: {
        id: userId
      }
    }
  });
}

export const getSchool = async ({ id, userId }: { id: string, userId: string }) => {
  const repository = postgresService.getRepository(School);
  return repository.findOneOrFail({
    where: {
      id,
      owner: {
        id: userId
      }
    }
  });
}

export const createSchool = async (data: Partial<School> & {ownerId: string}) => {
  const repository = postgresService.getRepository(School);
  return repository.save({
    name: data.name,
    location: data.location,
    coordX: data.coordX,
    coordY: data.coordY,
    owner: {
      id: data.ownerId
    }
  });
}

export const updateSchool = async (data: Partial<School> & { ownerId: string }) => {
  const repository = postgresService.getRepository(School);
  const school = await repository.findOneOrFail({
    where: {
      id: data.id,
      owner: {
        id: data.ownerId
      }
    }
  });
  if (data.name) school.name = data.name;
  if (data.location) school.location = data.location;
  if (data.coordX) school.coordX = data.coordX;
  if (data.coordY) school.coordY = data.coordY;

  return repository.save(school);
}

export const deleteSchool = async (data: Partial<School> & { ownerId: string }) => {
  const repository = postgresService.getRepository(School);
  const school = await repository.findOneOrFail({
    select: { id: true, owner: { id: true } },
    relations: { owner: true },
    where: {
      id: data.id,
      owner: {
        id: data.ownerId
      }
    }
  });

  const result = await repository.softDelete({ id: school.id, owner: { id: data.ownerId } });
  if (!result.affected) return null;
  return school.id;
}
