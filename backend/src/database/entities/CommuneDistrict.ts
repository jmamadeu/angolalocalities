import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Municipality from './Municipality';

@Entity('communes_districts')
export default class CommuneDistrict {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('float', { nullable: true })
  population: number;

  @Column()
  type: 'Comuna' | 'Distrito';

  @ManyToOne(() => Municipality, (municipality) => municipality)
  @JoinColumn({ name: 'municipality_id' })
  municipality: Municipality;
}
