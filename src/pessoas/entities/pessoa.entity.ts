import { StackEntity } from './stack.entity';

export class Pessoa {
  id?: string;
  nome: string;
  nascimento: Date;
  apelido: string;
  stacks?: StackEntity[];
}
