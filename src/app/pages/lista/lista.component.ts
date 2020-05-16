import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../providers/cliente.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  // providers: [ClienteService]
})
export class ListaComponent {

  public clientes = [];

  constructor(private service: ClienteService) {
    this.clientes = service.read();
  }
}
