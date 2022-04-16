import { Injectable } from '@angular/core';
import { IPokemon } from './pokemonmodel';
import { catchError, Observable,of,throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private dataUri = 'http://localhost:3000/pokemons'

  constructor(private http: HttpClient) { }

 // pokemon:IPokemon = new IPokemon();

  getPokemons(): Observable<IPokemon[]>{
    console.log("getPokemons is called");

    return this.http.get<IPokemon[]>(`${this.dataUri}?limit=5`)
    .pipe(
      catchError(this.handleError)
    )
  }

  addPokemon(pokemon: IPokemon): Observable<IPokemon>{
    return this.http.post<IPokemon>(this.dataUri,pokemon)
    .pipe(
      catchError(this.handleError)
    )
  }

  updatePokemon(id: string, pokemon: IPokemon): Observable<IPokemon> {
    console.log('subscribing to update' + id);
    let pokemonURI: string = this.dataUri + '/' + id;
    return this.http.put<IPokemon>(pokemonURI, pokemon)
      .pipe(
        catchError(this.handleError)
      )
  }

  deletePokemon(id: string): Observable<unknown> {
    const url = `${this.dataUri}/${id}`; // DELETE 
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }  

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
    }

    
}
