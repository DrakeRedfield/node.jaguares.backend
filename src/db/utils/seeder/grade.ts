import postgresService from '../../config';
import { logger } from '../../../utils/services/winston';
import { errorLoggerHandler } from '../../../utils/services/error';
import { Grade } from '../../model/Grade';
import { GradeType } from '../enum/grade';

export const seedGrades = async () => {
  try {
    const count = await postgresService.dataSource.createQueryBuilder()
      .select()
      .from(Grade, 'grades')
      .getCount();

    if (!count) {
      await postgresService.dataSource.createQueryBuilder()
        .insert()
        .into(Grade)
        .values(gradeValues)
        .execute();
      logger.info("======= Grades saved successfully");
    }
    return true;
  } catch (error) {
    logger.error("======= Couldn't seed Grades");
    errorLoggerHandler(error);
    return false;
  }
}

const gradeValues: Partial<Grade>[] = [
  { level: 14, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 10, colorBelt: 'Blanca' },
  { level: 13, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 9, colorBelt: 'Blanca Avanzada' },
  { level: 12, gradeType: GradeType.Kup, isOfficial: false, officialLevel: null, colorBelt: 'Naranja' },
  { level: 11, gradeType: GradeType.Kup, isOfficial: false, officialLevel: null, colorBelt: 'Naranja Avanzada' },
  { level: 10, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 8, colorBelt: 'Amarilla' },
  { level: 9, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 7, colorBelt: 'Amarilla Avanzada' },
  { level: 8, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 6, colorBelt: 'Verde' },
  { level: 7, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 5, colorBelt: 'Verde Avanzada' },
  { level: 6, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 4, colorBelt: 'Azul' },
  { level: 5, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 3, colorBelt: 'Azul Avanzada' },
  { level: 4, gradeType: GradeType.Kup, isOfficial: false, officialLevel: null, colorBelt: 'Marron' },
  { level: 3, gradeType: GradeType.Kup, isOfficial: false, officialLevel: null, colorBelt: 'Marron Avanzada' },
  { level: 2, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 2, colorBelt: 'Roja' },
  { level: 1, gradeType: GradeType.Kup, isOfficial: true, officialLevel: 1, colorBelt: 'Roja Avanzada' },
  { level: 1, gradeType: GradeType.Poom, isOfficial: true, officialLevel: 1, colorBelt: 'Rojinegra' },
  { level: 2, gradeType: GradeType.Poom, isOfficial: true, officialLevel: 2, colorBelt: 'Rojinegra' },
  { level: 3, gradeType: GradeType.Poom, isOfficial: true, officialLevel: 3, colorBelt: 'Rojinegra' },
  { level: 1, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 1, colorBelt: 'Negra' },
  { level: 2, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 2, colorBelt: 'Negra' },
  { level: 3, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 3, colorBelt: 'Negra' },
  { level: 4, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 4, colorBelt: 'Negra' },
  { level: 5, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 5, colorBelt: 'Negra' },
  { level: 6, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 6, colorBelt: 'Negra' },
  { level: 7, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 7, colorBelt: 'Negra' },
  { level: 8, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 8, colorBelt: 'Negra' },
  { level: 9, gradeType: GradeType.Dan, isOfficial: true, officialLevel: 9, colorBelt: 'Negra' },
]
