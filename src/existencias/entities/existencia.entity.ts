import { Bodegas } from 'src/bodegas/entities/bodegas.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'existencias' })
export class Existencia {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id_existencia: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cantidad: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;
  @ManyToOne(() => Producto, (producto) => producto.existencia, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_producto', referencedColumnName: 'id_producto' })
  producto: Producto;
  @ManyToOne(() => Bodegas, (bodega) => bodega.existencia, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_bodega', referencedColumnName: 'id_bodega' })
  bodega: Bodegas;
}
