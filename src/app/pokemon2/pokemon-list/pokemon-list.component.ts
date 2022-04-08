import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { IPokemon } from 'src/app/pokemonmodel';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: IPokemon[];
  message:string;

  currentPokemon: IPokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemons().subscribe({
      next: 
    })
  }

}
