import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Teacher } from './Teacher';
import { Student } from './Student';
import { Event } from './Event';
import { Service } from './Service';
import { User } from './User';

@Entity()
export class School {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column({ type: 'real' })
  coordX: number;

  @Column({ type: 'real' })
  coordY: number;

  @OneToMany(() => Teacher, teacher => teacher.school)
  teachers: Teacher[];

  @OneToMany(() => Student, student => student.school)
  students: Student[];

  @OneToMany(() => Event, event => event.school)
  events: Event[];

  @OneToMany(() => Service, service => service.school)
  services: Service[];

  @ManyToOne(() => User, user => user.schools)
  @JoinColumn()
  owner: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}