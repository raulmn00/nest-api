import { Pessoa } from '../entities/pessoa.entity';
import { StackEntity } from '../entities/stack.entity';

export class CreatePessoaDto implements Pessoa {
  nome: string;
  apelido: string;
  nascimento: Date;
  stacks: StackEntity[];
}
