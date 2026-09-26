import { Existencia } from 'src/existencias/entities/existencia.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'bodegas' })
export class Bodegas {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id_bodega: number;
  @Column({ type: 'character varying', length: 100, unique: true })
  codigo: string;
  @Column({ type: 'character varying', length: 100, unique: true })
  nombre: string;
  @Column({ type: 'character varying', length: 200 })
  descripcion: string;
  @OneToMany(() => Existencia, (existencia) => existencia.bodega, {
    nullable: false,
  })
  existencia: Existencia;
}
