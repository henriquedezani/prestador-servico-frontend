import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../../providers/servico.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {

  public servicos;

  constructor(private service: ServicoService) {
    this.servicos = service.read();
  }

}
