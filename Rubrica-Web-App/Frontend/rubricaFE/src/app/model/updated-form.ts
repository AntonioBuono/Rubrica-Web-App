export class UpdatedForm {
  cognome!:string;
  nome!:string;
  telefono!:string;
  codiceContatto!:string;
  constructor(nome:string,cognome:string, telefono:string,codiceContatto:string) {
    this.nome = nome;
    this.cognome = cognome;
    this.telefono = telefono;
    this.codiceContatto = codiceContatto;
  }
}
