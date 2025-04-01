import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../utils/model/base.entity';

@Entity()
export class Address extends BaseEntity {
  @Column({ type: 'text' })
  street: string;

  @Column({ type: 'text' })
  city: string;

  @Column({ type: 'text' })
  state: string;

  @Column({ type: 'text' })
  zip: string;

  @Column({ type: 'text' })
  country: string;
}