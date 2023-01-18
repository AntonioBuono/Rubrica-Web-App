import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Contact } from '../model/contact';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  readonly apiUrl: any;
  private _environmentObj = environment;
  httpOptions = {
    'Content-Type': 'application/json',
    withCredentials: false,
  }

  constructor(
    protected configService: ConfigService,
    protected http: HttpClient
  ) {
    this.apiUrl = configService.apiUrl;
   }

   getAllContacts(): Observable<any>{
    const url = this.apiUrl + this._environmentObj.getAllContacts;
    return this.http.get(url, this.httpOptions);
   }

   getContact(id:number):Observable<any>{
    const url = this.apiUrl + this._environmentObj.getContact + "/'?id=' " + id;
    return this.http.get(url, this.httpOptions);
   }

   createContact(contact:Contact){
    const url = this.apiUrl + this._environmentObj.createContact;
    return this.http.post<Contact>(url,contact,this.httpOptions);
   }

   updateContact(contact:Contact, id:number){
    const url = this.apiUrl + this._environmentObj.updateContact + "/" + id;
    return this.http.put<void>(url,contact,this.httpOptions)

   }
   deleteContact(id:number){
    const url = this.apiUrl + this._environmentObj.deleteContact + "/" + id;
    return this.http.delete(url,this.httpOptions);
   }
}
