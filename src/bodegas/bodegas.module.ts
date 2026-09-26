import { Module } from '@nestjs/common';
import { BodegasService } from './bodegas.service';
import { BodegasController } from './bodegas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bodegas } from './entities/bodegas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bodegas])],
  controllers: [BodegasController],
  providers: [BodegasService],
  exports: [BodegasService],
})
export class BodegasModule {}
