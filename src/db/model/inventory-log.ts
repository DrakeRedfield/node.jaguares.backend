import { Entity, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { BaseEntity } from '../utils/model/base.entity';
import { Product } from './product';
import { TypeOfMovement } from '../utils/enum/inventory';
import { Sale } from './sale';
import { User } from './user';

@Entity()
export class InventoryLog extends BaseEntity {
  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'int' })
  type: TypeOfMovement;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Sale, {nullable: true})
  sale: Sale;

  @ManyToOne(() => User, { nullable: true })
  user: User;

  @CreateDateColumn({ select: true })
  createdAt: Date;
}