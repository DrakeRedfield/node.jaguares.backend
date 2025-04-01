import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../utils/model/base.entity';
import { Sale } from './sale';

@Entity()
export class Customer extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', select: false })
  password: string;

  @OneToMany(() => Sale, (sale) => sale.customer)
  purchases: Sale[]
}