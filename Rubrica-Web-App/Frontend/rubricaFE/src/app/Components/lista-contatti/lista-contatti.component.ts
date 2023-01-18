import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { RubricaService } from 'src/app/Shared/rubrica.service';

@Component({
  selector: 'app-lista-contatti',
  templateUrl: './lista-contatti.component.html',
  styleUrls: ['./lista-contatti.component.css']
})
export class ListaContattiComponent {
  contatti!: Contact[];
  displayedColumns: string[] = ['id', 'name','telefono','pulsanti'];
  contactId!:number;
  actionBtn!: string;
  constructor(private rubrica:RubricaService, private route:Router){}
  ngOnInit(): void {
    this.getAllContacts();
  }



  getAllContacts(){
this.rubrica.getAllContacts().subscribe({
  next:(response)=> {
    console.log(response);
    this.contatti = response
  }
})
  }

  updateContact(object:any){
    console.log(object.id);
this.contactId= object.id;
this.route.navigate(["modifica-contatto", this.contactId], object);
  }
  goOnAdd(){
    this.route.navigate(["modifica-contatto"]);
  }

  deleteContact(object:any){
    this.rubrica.deleteContact(object.id)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.getAllContacts();
      }
    })
  }
}
