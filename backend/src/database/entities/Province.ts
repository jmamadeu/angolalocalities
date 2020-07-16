import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Municipality from './Municipality';

@Entity('provinces')
export default class Province {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('float', { nullable: true })
  population: number;

  @Column('varchar', { nullable: true })
  iso_code: string;

  @Column('boolean')
  is_capital: boolean;

  @Column('float', { nullable: true })
  area: number;

  @OneToMany(() => Municipality, (municipality) => municipality.province)
  municipalities: Municipality[];
}
