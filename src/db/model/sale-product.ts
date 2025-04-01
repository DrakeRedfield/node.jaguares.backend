import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../utils/model/base.entity';
import { Product } from './product';
import { Sale } from './sale';

@Entity()
export class SaleProduct extends BaseEntity {
  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'real' })
  unitPrice: number;

  @Column({ type: 'real' })
  total: number;

  @ManyToOne(() => Product)
  product: Product

  @ManyToOne(() => Sale)
  sale: Sale
}