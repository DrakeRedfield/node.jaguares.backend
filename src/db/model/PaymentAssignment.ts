import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Payment } from './Payment';

export enum PaymentType {
  EVENT = 'event',
  SERVICE = 'service',
  OTHER = 'other',
}

@Entity()
export class PaymentAssignment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: PaymentType })
  type: PaymentType;

  @Column()
  referenceId: string;

  @ManyToOne(() => Payment, payment => payment.assignments)
  @JoinColumn()
  payment: Payment;
}