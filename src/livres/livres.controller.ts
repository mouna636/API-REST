import { Controller,Get,Body,Post,Param,Put,Delete } from '@nestjs/common';
import { LivresService } from './livres.service';
import { Livres } from './livres.modéle';

@Controller('livres')
export class LivresController {
    constructor(private livresService: LivresService) {}
    @Get()
  findAll(): Livres[] {
    return this.livresService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Livres {
    return this.livresService.findById(id);
  }

  @Post()
  create(@Body() livre: Livres): Livres {
    return this.livresService.create(livre);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedLivre: Livres): Livres | null {
    return this.livresService.update(id, updatedLivre);
  }
  @Delete(':id')
  delete(@Param('id') id: number): boolean {
    return this.livresService.delete(id);
  }

    
}
