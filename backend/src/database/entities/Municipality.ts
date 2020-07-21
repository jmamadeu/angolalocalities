import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Province from './Province';
import CommuneDistrict from './CommuneDistrict';

@Entity('municipalities')
export default class Municipality {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;

  @Column('float', { nullable: true })
  population: number;

  @Column('varchar', { nullable: true })
  iso_code: string;

  @Column('float', { nullable: true })
  area: number;

  @ManyToOne(() => Province, (province) => province.municipalities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @OneToMany(
    () => CommuneDistrict,
    (communeDistrict) => communeDistrict.municipality
  )
  communes_districts: CommuneDistrict[];
}
