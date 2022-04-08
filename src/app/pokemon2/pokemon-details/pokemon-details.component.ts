import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/pokemonmodel';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemon : IPokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
