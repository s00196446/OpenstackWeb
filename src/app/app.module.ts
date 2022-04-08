import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon2/pokemon-list/pokemon-list.component';
import { PokemonRowComponent } from './pokemon2/pokemon-row/pokemon-row.component';
import { PokemonDetailsComponent } from './pokemon2/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonRowComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
