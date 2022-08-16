import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Persona } from '../models/person';
@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  
//Se crea una variable para almacenar el url del API a consumir 
  APIURL: any = 'http://190.60.101.59:6003/api/Personas'
  
  constructor(private http: HttpClient) {


   }

   //Se crea el metodo para ejecutar metodo post por medio de httpCLient

   postPerson(persona: Persona){
    return this.http.post(this.APIURL, persona )
   }
}
