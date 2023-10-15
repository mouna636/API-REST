import { Injectable } from '@nestjs/common';
import { Livres } from './livres.modéle';

@Injectable()
export class LivresService {
    private livres: Livres[] = [];
  private nextId = 1;

  findAll(): Livres[] {
    return this.livres;
  }

  findById(id: number): Livres {
    return this.livres.find((livre) => livre.id === id);
  }

  create(livre: Livres): Livres {
    livre.id = this.nextId++;
    this.livres.push(livre);
    return livre;
  }

  update(id: number, updatedLivre: Livres): Livres | null {
    const livreIndex = this.livres.findIndex((livre) => livre.id === id);
    if (livreIndex === -1) {
      return null;
    }
    this.livres[livreIndex] = { ...this.livres[livreIndex], ...updatedLivre };
    return this.livres[livreIndex];
  }

  delete(id: number): boolean {
    const livreIndex = this.livres.findIndex((livre) => livre.id === id);
    if (livreIndex === -1) {
      return false;
    }
    this.livres.splice(livreIndex, 1);
    return true;
  }
}
