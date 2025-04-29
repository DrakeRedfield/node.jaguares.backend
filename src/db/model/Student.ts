import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Grade } from './Grade';
import { School } from './School';
import { Payment } from './Payment';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  birthday: Date;

  @Column()
  registrationDate: Date;

  @ManyToOne(() => Grade, grade => grade.students)
  @JoinColumn()
  grade: Grade;

  @ManyToOne(() => School, school => school.students)
  @JoinColumn()
  school: School;

  @OneToMany(() => Payment, payment => payment.student)
  payments: Payment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}