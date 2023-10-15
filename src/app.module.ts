import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivresModule } from './livres/livres.module';
import { LivresService } from './livres/livres.service';
import { LivresController } from './livres/livres.controller';


@Module({
  imports: [LivresModule],
  controllers:[LivresController],
  providers: [LivresService],
})
export class AppModule {}
