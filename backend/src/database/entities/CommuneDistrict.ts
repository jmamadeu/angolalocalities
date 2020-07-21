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

  @Column('varchar', { nullable: false })
  type: 'Comuna' | 'Distrito';

  @ManyToOne(() => Municipality, (municipality) => municipality, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'municipality_id' })
  municipality: Municipality;
}
