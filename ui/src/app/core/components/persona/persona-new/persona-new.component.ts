import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { PersonaFull } from 'src/app/model/personaFull';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona-new',
  templateUrl: './persona-new.component.html',
  styleUrls: ['./persona-new.component.css']
})
export class PersonaNewComponent implements OnInit {

  personaAGuardar: PersonaFull;
  contactoDtoAGuardar: Contacto;
  generos: string[] = this.personaService.getGeneros();
  paises: string[] = this.personaService.getPaises();
  apellidoHTML: string;
  nombreHTML: string;

  valido: string;

  personaForm = this.fB.group({
    id: <number>0,
    apellido: 'NC',
    nombre: 'NC',
    dni: ['', [Validators.minLength(2), Validators.maxLength(2), Validators.pattern("^[0-9]*$")]],
    sexo: 'NC',
    contactoId: 0,
    pais: 'NC',
    provincia: 'NC',
    departamento: 'NC',
    localidad: 'NC',
    calle: 'NC',
    numero: 0,
    telefono1: 'NC',
    telefono2: 'NC',
    mail: 'NC',
    estado: <string>'NC',
  });

  constructor(
    private fB: FormBuilder,
    private personaService: PersonaService,
    private router: Router) { }

  ngOnInit(): void {
  }
  actApellido(){
    this.apellidoHTML = String(this.personaForm.value.apellido);
  }
  actNombres(){
    this.nombreHTML = String(this.personaForm.value.nombre);  
  }
  actValue(){
    console.log(this.personaForm.value.dni);
  }


  save(){
    this.contactoDtoAGuardar = {
      contactoId: Number(this.personaForm.value.contactoId),
      pais: String(this.personaForm.value.pais),
      provincia: String(this.personaForm.value.provincia).toUpperCase(),
      departamento: String(this.personaForm.value.departamento).toUpperCase(),
      localidad: String(this.personaForm.value.localidad).toUpperCase(),
      calle: String(this.personaForm.value.calle).toUpperCase(),
      numero: Number(this.personaForm.value.numero),
      telefono1: String(this.personaForm.value.telefono1),
      telefono2: String(this.personaForm.value.telefono2),
      mail: String(this.personaForm.value.mail).toLowerCase()
    };
    this.personaAGuardar = {
      id: Number(this.personaForm.value.id),
      dni: String(this.personaForm.value.dni),
      apellido: String(this.personaForm.value.apellido).toUpperCase(),
      nombre: String(this.personaForm.value.nombre).toUpperCase(),
      sexo: String(this.personaForm.value.sexo),
      estado: Boolean(this.personaForm.value.estado),
      contactoDTO: this.contactoDtoAGuardar
      };
      let respuesta: any;
      this.personaService.updateOurUpdate(this.personaAGuardar).subscribe((response: any) => {
        respuesta = response as PersonaFull;
      });

      // Object.entries(this.personaAGuardar).forEach(([key, value]) => {
      //   console.log(key + " --> "+ value);
      //   if(key == 'contactoDTO'){
      //     Object.entries(value).forEach(([key, value]) => {
      //       console.log(key + " --> "+ value);
      //     })
      //   }
      // });
    this.cancel();
    }
  
    cancel(){
      this.router.navigate(['personas/']);
    }
}
