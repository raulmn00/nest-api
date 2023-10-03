import { Pessoa } from '../entities/pessoa.entity';
import { StackEntity } from '../entities/stack.entity';

export class CreatePessoaDto implements Pessoa {
  apelido: string;
  nascimento: Date;
  nome: string;
  stacks: StackEntity[];
}
