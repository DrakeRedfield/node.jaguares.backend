import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Teacher } from './Teacher';
import { Student } from './Student';
import { Event } from './Event';
import { Service } from './Service';
import { User } from './User';

@Entity()
export class Doujang {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  coords: string;

  @OneToMany(() => Teacher, teacher => teacher.doujang)
  teachers: Teacher[];

  @OneToMany(() => Student, student => student.doujang)
  students: Student[];

  @OneToMany(() => Event, event => event.doujang)
  events: Event[];

  @OneToMany(() => Service, service => service.doujang)
  services: Service[];

  @ManyToOne(() => User, user => user.doujangs)
  @JoinColumn()
  owner: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}