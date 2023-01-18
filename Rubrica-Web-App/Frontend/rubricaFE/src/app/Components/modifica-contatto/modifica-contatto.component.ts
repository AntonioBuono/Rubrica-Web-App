import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { IContact } from 'src/app/Interfaces/icontact';
import { Contact } from 'src/app/model/contact';
import { UpdatedForm } from 'src/app/model/updated-form';
import { RubricaService } from 'src/app/Shared/rubrica.service';

@Component({
  selector: 'app-modifica-contatto',
  templateUrl: './modifica-contatto.component.html',
  styleUrls: ['./modifica-contatto.component.css']
})
export class ModificaContattoComponent implements OnInit{
  contact!:IContact;
  contactOld!:any;
  updatedContact: any;
  contactId!:number;
  contactForm!:FormGroup;
  actionBtn:string= "Salva";
  titolo:string="Nuovo Contatto";

  //Creo un form Builder per
  // contactForm=({
  //   nome: new FormControl(''),
  //   cognome: new FormControl(''),
  //   telefono: new FormControl('')
  // })

  constructor(
    private rubrica:RubricaService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder
    ){
      this.contactOld = this.router.getCurrentNavigation()?.extras;
       console.log(   this.contactOld);
       this.contactId = this.contactOld.id;
       }

ngOnInit(): void {
  // this.contactForm = this.formBuilder.group({
  //   nome: [this.contactOld.nome],
  //   cognome:[this.contactOld.cognome],
  //   telefono:[this.contactOld.telefono]
  // });
  //istanzio il mio formGroup, al cui gli passo un oggetto

  this.contactForm= this.formBuilder.group({
    name: ['', Validators.required],
    cognome: ['', Validators.required],
    telefono: ['', Validators.required],
  });
  console.log(this.contactOld);
  if(this.contactOld.id!=null){
    this.titolo="Modifica Contatto";
    this.actionBtn="Aggiorna"
    this.contactForm.controls['name'].setValue(this.contactOld.name);
    this.contactForm.controls['cognome'].setValue(this.contactOld.cognome);
    this.contactForm.controls['telefono'].setValue(this.contactOld.telefono);
  }
}

addContact(){
  if(this.contactForm.valid){
    this.rubrica.createContact(this.contactForm.value)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.contactForm.reset();
        this.router.navigate(["lista-contatti"]);

      },
      error:()=>{
        console.log("eorroe durante l'aggiunta")
      }
    })
  }
}

updateContact(){
  if(this.contactForm.valid){
  this.rubrica.updateContact(this.contactForm.value,this.contactId)
  .subscribe({
    next:(res)=>{
      console.log("aggiornato contatto");
      this.contactForm.reset();
      this.router.navigate(["lista-contatti"]);
    }
  })
}
}



}

