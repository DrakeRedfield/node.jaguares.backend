import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../utils/model/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', select: false })
  password: string;
}