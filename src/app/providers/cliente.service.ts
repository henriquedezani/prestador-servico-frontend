import { Injectable } from '@angular/core';

// singleton
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes = [
    {
      nome: 'Batman',
      email: 'batman@dc.com',
      status: true,
    },
    {
      nome: 'Homem de Ferro',
      email: 'ironman@marvel.com',
      status: false
    }
  ];

  public read(): any {
    return this.clientes;
  }

  public create(): void {
    this.clientes.push({
      nome: 'Capitão América',
      email: 'capitao@marvel.com',
      status: true
    });
  }
}
