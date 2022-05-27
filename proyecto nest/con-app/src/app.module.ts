import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TrabajadorModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
