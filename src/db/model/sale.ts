import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../utils/model/base.entity';
import { Customer } from './customer';
import { SaleProduct } from './sale-product';

@Entity()
export class Sale extends BaseEntity {
  @Column({ type: 'real' })
  amount: number;

  @ManyToOne(() => Customer, (customer) => customer.purchases)
  customer: Customer

  @OneToMany(() => SaleProduct, (product) => product.sale)
  products: SaleProduct[]
}