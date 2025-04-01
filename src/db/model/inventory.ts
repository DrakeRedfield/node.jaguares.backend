import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../utils/model/base.entity';
import { Product } from './product';

@Entity()
export class Inventory extends BaseEntity {
  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => Product)
  product: Product
}