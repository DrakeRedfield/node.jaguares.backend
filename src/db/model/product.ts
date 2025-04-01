import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../utils/model/base.entity';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  image: string;

  @Column({ type: 'real' })
  price: number;
}