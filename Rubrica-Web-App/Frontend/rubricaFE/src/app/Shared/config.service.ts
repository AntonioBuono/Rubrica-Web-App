import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _environmentObj = environment;
  constructor() { }

  get apiUrl() : string{
    return this._environmentObj.apiUrl;
  }
}
