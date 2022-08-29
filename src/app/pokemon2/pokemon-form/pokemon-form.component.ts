import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { IPokemon } from 'src/app/pokemonmodel';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

  @Input() pokemon:IPokemon;
  @Output() pokemonFormClose = new EventEmitter<IPokemon>();
  message: string = "";
  pokemonForm : UntypedFormGroup;

  constructor() {
        this.pokemonForm = new UntypedFormGroup({
        Name: new UntypedFormControl(this.pokemon?.Name),
        Type: new UntypedFormControl(this.pokemon?.Type),
        Generation: new UntypedFormControl(this.pokemon?.Generation),
        PokedexNo: new UntypedFormControl(this.pokemon?.PokedexNo)
    })
  }

  onSubmit(): void {
    console.log('forms submitted with ');
    console.table(this.pokemonForm?.value);
    this.pokemonFormClose.emit(this.pokemonForm?.value)
  }

  get Name() {
    return this.pokemonForm?.get('Name');
  }

  get Type() {
    return this.pokemonForm?.get('Type');
  }

  get Generation() {
    return this.pokemonForm.get('Generation')
  }

  get PokedexNo() {
    return this.pokemonForm.get('PokedexNo')
  }

  closeForm() {
    this.pokemonFormClose.emit(undefined)

  }

}
