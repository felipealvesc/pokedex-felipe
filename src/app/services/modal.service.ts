import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: any[] = [];
  constructor() { }

  // adiciona o modal para o array de modals ativo
  adicionar(modal: any) {
    this.modals.push(modal);
  }

  // remove o modal do array de modals ativo
  remover(id: string) {
    this.modals = this.modals.filter( x => x.id !== id );
  }

  // abre o modal por id
  abrir(id: string) {
    const modal = this.modals.find( x => x.id === id);
    modal.abrir();
  }

  // fecha o modal por id
  fechar(id: string) {
    const modal = this.modals.find( x => x.id === id);
    modal.fechar();
  }

}

