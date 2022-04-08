import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/pokemonmodel';

@Component({
  selector: 'app-pokemon-row',
  templateUrl: './pokemon-row.component.html',
  styleUrls: ['./pokemon-row.component.css']
})
export class PokemonRowComponent implements OnInit {

  @Input() pokemon: IPokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
