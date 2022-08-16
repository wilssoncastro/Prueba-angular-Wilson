import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/person';
import { ServicePostService } from 'src/app/services/service-post.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //Se crea el objeto que sera enviado por post
  persona: Persona = {
    IdPersona: 0,
    Documento: "",
    Nombres: "",
    Apellidos: "",
    Telefono: "",
    Correo: "",
    Direccion: ""
  }



  constructor(private postService: ServicePostService) { }

  ngOnInit(): void {
  }

  //Se crea el metodo qu ejecutara la accion (click) del boton guardar

  guardarPersona() {
    //se hace una pequeña validacion 
    if (!this.persona.Documento && !this.persona.Apellidos || !this.persona.Correo || !this.persona.Nombres || !this.persona.Telefono || !this.persona.Direccion) {
      alert("Debes llenar todos los campos")
    } else {
      //se ejecuta el metodo post para guardar la persona  
      this.postService.postPerson(this.persona)
        .subscribe(res => {
          console.log(res)
          //se setea el objeto persona para que borre el formulario
          this.persona = {
            IdPersona: 0,
            Documento: "",
            Nombres: "",
            Apellidos: "",
            Telefono: "",
            Correo: "",
            Direccion: ""
          }
        },
          err => {
            console.log(err)
          })
    }
  }
}
