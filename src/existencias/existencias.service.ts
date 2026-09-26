import { Injectable } from '@nestjs/common';
import { CreateExistenciaDto } from './dto/create-existencia.dto';
import { UpdateExistenciaDto } from './dto/update-existencia.dto';

@Injectable()
export class ExistenciasService {
  create(createExistenciaDto: CreateExistenciaDto) {
    return 'This action adds a new existencia';
  }

  findAll() {
    return `This action returns all existencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} existencia`;
  }

  update(id: number, updateExistenciaDto: UpdateExistenciaDto) {
    return `This action updates a #${id} existencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} existencia`;
  }
}
