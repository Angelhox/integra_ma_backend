import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExistenciasService } from './existencias.service';
import { CreateExistenciaDto } from './dto/create-existencia.dto';
import { UpdateExistenciaDto } from './dto/update-existencia.dto';

@Controller('existencias')
export class ExistenciasController {
  constructor(private readonly existenciasService: ExistenciasService) {}

  @Post()
  create(@Body() createExistenciaDto: CreateExistenciaDto) {
    return this.existenciasService.create(createExistenciaDto);
  }

  @Get()
  findAll() {
    return this.existenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.existenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExistenciaDto: UpdateExistenciaDto) {
    return this.existenciasService.update(+id, updateExistenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.existenciasService.remove(+id);
  }
}
