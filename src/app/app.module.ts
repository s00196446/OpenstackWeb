import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
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
    PokemonFormComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
