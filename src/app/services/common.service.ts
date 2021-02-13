import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  API_URL = environment.API_URL;



  constructor(
    private http: HttpClient,
  ) { }


  getPokemon() {
    return this.http.get(`${this.API_URL}${'/pokemon'}`);
  }

  getDetailPokemon(name) {
    return this.http.get(`${this.API_URL}${'/pokemon'}/${name}`);
  }

  getAbilityPokemon() {
    return this.http.get(`${this.API_URL}${'/ability'}`);
  }

  getAbilityPokemonSelected(url) {
    return this.http.get(url);
  }
 
}

