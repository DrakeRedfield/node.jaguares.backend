import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { PaymentMethod } from './PaymentMethod';
import { Student } from './Student';
import { School } from './School';
import { PaymentAssignment } from './PaymentAssignment';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float')
  amount: number;

  @Column()
  transactionDate: Date;

  @Column({ default: true })
  status: boolean;

  @ManyToOne(() => PaymentMethod, method => method.payments)
  @JoinColumn()
  method: PaymentMethod;

  @ManyToOne(() => Student, student => student.payments, { nullable: true })
  @JoinColumn()
  student: Student;

  @ManyToOne(() => School, { eager: true })
  @JoinColumn()
  school: School;

  @OneToMany(() => PaymentAssignment, pa => pa.payment)
  assignments: PaymentAssignment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}