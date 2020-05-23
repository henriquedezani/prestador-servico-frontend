import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servico, CreateServicoCommand } from '../models/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private url: string = "http://localhost:5000/v1/servico";

  constructor(private http: HttpClient) { }

  public read() {
    return this.http.get<Servico[]>(this.url);
  }

  public create(servico: CreateServicoCommand) {
    return this.http.post(this.url, servico);
  }
}
