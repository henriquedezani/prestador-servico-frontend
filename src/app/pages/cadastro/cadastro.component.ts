import { Component } from '@angular/core';
import { ServicoService } from '../../providers/servico.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateServicoCommand } from '../../models/servico';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  {

  public form = new FormGroup({
    titulo: new FormControl('', Validators.minLength(3)),
    descricao: new FormControl('', Validators.minLength(10)),
  });

  constructor(private service: ServicoService) {}

  public onSubmit(): void {
    const cmd = new CreateServicoCommand();
    cmd.titulo = this.form.value.titulo;
    cmd.descricao = this.form.value.descricao;
    cmd.usuario = "henrique";

    // console.log(cmd);
    this.service.create(cmd).subscribe((response) => {
      console.log(response);
    })
  }
  
}
