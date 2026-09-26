/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  codigo: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(200)
  descripcion: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  marca: string;
  @Min(1)
  @IsNotEmpty()
  @IsInt()
  fk_categoria: number;
}
