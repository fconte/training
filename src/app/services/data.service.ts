import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    {
      name: 'Bulbizarre',
      picture: 'https://www.pokepedia.fr/images/thumb/a/a1/Bulbizarre_Apparition.png/300px-Bulbizarre_Apparition.png',
      version: 'rouge'
    },
    {
      name: 'Salamèche',
      picture: 'http://www.eclypsia.com/content/Pokemon/LetsGo/Salameche_LetsGo.jpg',
      version: 'rouge'
    },
    {
      name: 'Goupix',
      picture: 'https://www.pokepedia.fr/images/thumb/8/81/Goupix_de_Pierre.png/300px-Goupix_de_Pierre.png',
      version: 'bleu'
    },
    {
      name: 'Pikachu',
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      version: 'bleu'
    },
    {
      name: 'Pikachu',
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      version: 'bleu'
    },

  ];
  /**
   * Liste des pokemons
   */
  public pokemons;

  /**
   * Liste des versions
   */
  public versions;

  /**
   * Observable de type boolean retournant TRUE lorsque les données episodes et seasons sont disponibles
   */
  public dataIsLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {

    setTimeout(() => {
      this.pokemons = this.data;
      this.versions = ['bleu', 'rouge'];

      this.dataIsLoaded.next(true);
    }, 300);
  }
}
