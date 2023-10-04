import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

@Controller('/pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreatePessoaDto) {
    return this.pessoasService.create(body);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.pessoasService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.pessoasService.findOne(id);
  }

  @Get('/contagem-pessoas')
  @HttpCode(HttpStatus.OK)
  async count() {
    return this.pessoasService.count();
  }
}
