import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Student } from './Student';
import { GradeType } from '../utils/enum/grade';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  level: number;

  @Column({ type: 'smallint', nullable: true})
  officialLevel: number | null;

  @Column({default: true})
  isOfficial: boolean;

  @Column()
  colorBelt: string;

  @Column({
    type: 'enum',
    enum: GradeType,
    default: 'Kup',
  })
  gradeType: GradeType;

  @OneToMany(() => Student, student => student.grade)
  students: Student[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}