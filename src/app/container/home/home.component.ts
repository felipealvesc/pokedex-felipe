import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public loader = false;
  public listPokemon: any;
  public searchText: string;
  public listDetailPokemon: any;
  public listAbilityPokemon: any;
  public abilities: any


  constructor(
    private myCommon: CommonService,
    private modalServ: ModalService
  ) {
  }
  public innerWidth: any;

  ngOnInit() {
    this.loader = true; 
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.myCommon.getPokemon().subscribe(res => {
      this.loader = false;
      this.listPokemon = res
      this.listPokemon = this.listPokemon.results
      this.getAbilityPokenon();
    },
    e => {
      console.log(e);
      this.loader = false;
    });
  }

  detailPokenon(name: string) {
    this.myCommon.getDetailPokemon(name).subscribe(res => {
      this.listDetailPokemon = res
      this.abilities = this.listDetailPokemon.abilities.map(ability => ability.ability)

      this.abrirModal('detail-pokemon')
      console.log(res);
    },
    e => {
      console.log(e);
      this.loader = false;
    });
  }


  getAbilityPokenon() {
    this.myCommon.getAbilityPokemon().subscribe(res => {
      this.listAbilityPokemon = res;
      this.listAbilityPokemon =  this.listAbilityPokemon.results;
    },
    e => {
      console.log(e);
      this.loader = false;
    });
  }

  onChange(url) {
    this.loader = true;
    if(!url){
      this.getAllPokemon();
      return;
    }
    this.myCommon.getAbilityPokemonSelected(url).subscribe(res => {
      this.listPokemon = res;
      this.listPokemon = this.listPokemon.pokemon
      .map(pokemon => pokemon)
      .filter(pokemon => pokemon.is_hidden == false).
      map(pokemon => pokemon.pokemon)
      this.loader = false;
      
    },
    e => {
      console.log(e);
      this.loader = false;
    });
  }

  abrirModal(id: string) {    
    return this.modalServ.abrir(id);
  }
 
  fecharModal(id: string) {
    return this.modalServ.fechar(id);
  }

}
