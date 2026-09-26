import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Existencia } from 'src/existencias/entities/existencia.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'productos' })
export class Producto {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id_producto: number;
  @Column({ type: 'character varying', length: 100, unique: true })
  codigo: string;
  @Column({ type: 'character varying', length: 200 })
  descripcion: string;
  @Column({ type: 'character varying', length: 100 })
  marca: string;
  @ManyToOne(() => Categoria, (categoria) => categoria.producto, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_categoria', referencedColumnName: 'id_categoria' })
  categoria: Categoria;
  @OneToMany(() => Existencia, (existencia) => existencia.producto, {
    nullable: false,
  })
  existencia: Existencia;
}
