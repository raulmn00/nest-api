import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { PrismaService } from './prisma/prisma.service';
import { PessoasService } from "./pessoas/pessoas.service";

@Module({
  imports: [PessoasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, PessoasService],
})
export class AppModule {}
