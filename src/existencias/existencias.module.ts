import { Module } from '@nestjs/common';
import { ExistenciasService } from './existencias.service';
import { ExistenciasController } from './existencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Existencia } from './entities/existencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Existencia])],
  controllers: [ExistenciasController],
  providers: [ExistenciasService],
  exports: [ExistenciasService],
})
export class ExistenciasModule {}
