import { Component, OnInit, ViewEncapsulation, OnDestroy, Input, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private elRef: ElementRef) {
    this.element = elRef.nativeElement;
   }

  ngOnInit() {
    // Verifica se o component possui o atributo 'id'
    if (!this.id) {
      console.error(`É necessario inserir um 'id' no componente modal `);
      return;
    }
    // move o elemento para que possa ser exibido acima de todo o resto
    document.body.appendChild(this.element);

    this.element.addEventListener('click', elRef => {
      if (elRef.target.className === 'modal') {
        this.fechar();
      }
    });

    this.modalService.adicionar(this);
  }

  ngOnDestroy(): void {
    this.modalService.remover(this.id);
    this.element.remove();
  }

  abrir() {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  fechar() {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

}
