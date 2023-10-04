import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PessoasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dados: any) {
    const nascimentoFormatado = new Date(dados.nascimento);
    nascimentoFormatado.setFullYear(nascimentoFormatado.getFullYear() - 18);

    const stacks: any = dados.stacks.split(',');

    try {
      return this.prisma.pessoas.create({
        data: {
          nome: dados.nome,
          apelido: dados.apelido,
          nascimento: nascimentoFormatado.toISOString(),
          stacks,
        },
      });
    } catch (err) {
      console.log(err);
      throw new UnprocessableEntityException('UnprocessableEntityException', {
        cause: new Error(err),
        description: 'Invalid data.',
      });
    }
  }

  async findAll() {
    const todos = await this.prisma.pessoas.findMany({});
    return todos;
  }

  async findOne(id: string) {
    return this.prisma.pessoas.findUnique({
      where: {
        id,
      },
    });
  }

  count() {
    return this.prisma.pessoas.count();
  }

  async search(termo: string) {
    return this.prisma.pessoas.findMany({
      where: {
        OR: [
          {
            apelido: {
              contains: termo,
            },
          },
          {
            nome: {
              contains: termo,
            },
          },
          {
            stacks: {
              array_contains: termo,
            },
          },
        ],
      },
    });
  }
}
