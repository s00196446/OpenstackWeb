import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon2/pokemon-list/pokemon-list.component';
import { PokemonRowComponent } from './pokemon2/pokemon-row/pokemon-row.component';
import { PokemonDetailsComponent } from './pokemon2/pokemon-details/pokemon-details.component';
import { PokemonFormComponent } from './pokemon2/pokemon-form/pokemon-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonRowComponent,
    PokemonDetailsComponent,
    PokemonFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
