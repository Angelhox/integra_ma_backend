import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CategoriasService } from 'src/categorias/categorias.service';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    private readonly categoriasService: CategoriasService,
  ) {}
  async create(createProductoDto: CreateProductoDto) {
    const categoria = await this.categoriasService.validateCategoria(
      createProductoDto.fk_categoria,
    );
    if (!categoria) {
      throw new Error('La categoría no existe');
    }
    console.log('La categoría existe, se puede crear el producto');
    const newProduct = this.productoRepository.create({
      ...createProductoDto,
      categoria,
    });
    return await this.productoRepository.save(newProduct);
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
