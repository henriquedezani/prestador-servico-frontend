import { Component } from '@angular/core';
import { ClienteService } from 'src/app/providers/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  {

  constructor(private service: ClienteService) { }

  public criar() : void { 
    this.service.create();
  }
}
