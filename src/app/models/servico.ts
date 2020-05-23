export interface Servico {

    id: String;
    titulo: String;
    descricao: String;
    usuario: String;
    status: Number;
}

export class CreateServicoCommand {

    titulo: String;
    descricao: String;
    usuario: String;
}