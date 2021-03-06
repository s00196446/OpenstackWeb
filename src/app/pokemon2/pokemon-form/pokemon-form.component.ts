import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPokemon } from 'src/app/pokemonmodel';



@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon?:IPokemon;
  @Output() pokemonFormClose = new EventEmitter<IPokemon>();
  message: string = "";
  pokemonForm? : FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.pokemonForm = new FormGroup({
      Name: new FormControl(this.pokemon.Name),
      Type: new FormControl(this.pokemon.Type, [Validators.required]),
      _id: new FormControl(this.pokemon._id, [Validators.required]),
      Generation: new FormControl(this.pokemon.Generation, [Validators.required]),
      PokedexNo: new FormControl(this.pokemon.PokedexNo, [Validators.required])
    })
  }

  onSubmit() {
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

  get _id() {
    return this.pokemonForm.get('_id')
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
