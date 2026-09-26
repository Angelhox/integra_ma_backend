import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BodegasService } from './bodegas.service';
import { CreateBodegasDto } from './dto/create-bodegas.dto';
import { UpdateBodegasDto } from './dto/update-bodegas.dto';

@Controller('bodegas')
export class BodegasController {
  constructor(private readonly bodegasService: BodegasService) {}

  @Post()
  create(@Body() createBodegasDto: CreateBodegasDto) {
    return this.bodegasService.create(createBodegasDto);
  }

  @Get()
  findAll() {
    return this.bodegasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bodegasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBodegasDto: UpdateBodegasDto) {
    return this.bodegasService.update(+id, updateBodegasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bodegasService.remove(+id);
  }
}
