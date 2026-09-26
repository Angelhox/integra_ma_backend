import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ExistenciasModule } from './existencias/existencias.module';
import { BodegasModule } from './bodegas/bodegas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      //Solucionar
      port: parseInt(process.env.DB_PORT || '5432') || 5432,
      username: process.env.DB_USERNAME || 'dinoTeam',
      password: process.env.DB_PASSWORD || 'desarrollo842026622',
      database: process.env.DB_NAME || 'bd_integra_ma_v1',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductosModule,
    CategoriasModule,
    ExistenciasModule,
    BodegasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
