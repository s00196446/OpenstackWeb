
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { IPokemon } from 'src/app/pokemonmodel';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: IPokemon[] = [];
  message: string = "";
  showPokemonForm : boolean = false;

  currentPokemon?: IPokemon = undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemons().subscribe({
      next: (value: IPokemon[]) => this.pokemonList = value,
      complete: () => console.log('Pokemon service finished'),
      error: (mess) => this.message = mess
  })
}


  clicked(pokemon: IPokemon): void {
    this.currentPokemon = pokemon;
    console.table(this.currentPokemon)
  }

  isSelected(pokemon: IPokemon): boolean {
    if (!pokemon || !this.currentPokemon) {
      return false;
    }
    else {

      return pokemon._id === this.currentPokemon._id;
    }
  }

  openAddPokemon(): void{
    this.currentPokemon = undefined;
    this.showPokemonForm= true;
  }

  openEditPokemon(): void{
    this.showPokemonForm = true;
  }

  addNewPokemon(newPokemon: any): void {
    console.log('adding new pokemon ' + JSON.stringify(newPokemon));
    this.pokemonService.addPokemon({ ...newPokemon })
      .subscribe({
        next: pokemon => {
          console.log(JSON.stringify(pokemon) + ' has been added');
          this.message = "new pokemon has been added";
        },
        error: (err) => this.message = err
      });

    // so the updated list appears

    this.pokemonService.getPokemons().subscribe({
      next: (value: IPokemon[]) => this.pokemonList = value,
      complete: () => console.log('pokemon service finished'),
      error: (mess) => this.message = mess
    })
  }

  updatePokemon(id: string, pokemon: IPokemon): void {
    console.log('updating ' + JSON.stringify(pokemon));
    this.pokemonService.updatePokemon(id, pokemon)
      .subscribe({
        next: pokemon => {
          console.log(JSON.stringify(pokemon) + ' has been updated');
          this.message = " pokemon has been updated";
        },
        error: (err) => this.message = err
      });
    // so the updated list appears

    this.pokemonService.getPokemons().subscribe({
      next: (value: IPokemon[]) => this.pokemonList = value,
      complete: () => console.log('pokemon service finished'),
      error: (mess) => this.message = mess
    })
  }


  pokemonFormClose(pokemon?: IPokemon): void {
    this.showPokemonForm = false;
    console.table(pokemon);
    if (pokemon == null) {
      this.message = "form closed without saving";
      this.currentPokemon = undefined
    }
    else if (this.currentPokemon == null) {
      this.addNewPokemon(pokemon);
    }
    else {
      this.updatePokemon(this.currentPokemon._id, pokemon)
    }
  }

  deletePokemon() {
    console.log('deleting a pokemon ');
    if (this.currentPokemon) {
      this.pokemonService.deletePokemon(this.currentPokemon._id)
        .subscribe({
          next: pokemon => {
            console.log(JSON.stringify(pokemon) + ' has been added');
            this.message = "pokemon has been deleted";
          },
          error: (err) => this.message = err
        });
    }

    // so the updated list appears

    this.pokemonService.getPokemons().subscribe({
      next: (value: IPokemon[]) => this.pokemonList = value,
      complete: () => console.log('pokemon service finished'),
      error: (mess) => this.message = mess
    })

  }


  dismissAlert() {
    this.message = "";
  }

}