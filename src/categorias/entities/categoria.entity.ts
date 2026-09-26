import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'categorias' })
export class Categoria {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id_categoria: number;
  @Column({ type: 'character varying', length: 100, unique: true })
  nombre: string;
  @Column({ type: 'character varying', length: 200 })
  descripcion: string;
  @OneToMany(() => Producto, (producto) => producto.categoria, {
    nullable: false,
  })
  producto: Producto;
}
