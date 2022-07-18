import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';

import { PersonaService } from 'src/app/core/components/persona/services/persona.service';
import { Contacto } from 'src/app/model/contacto';
import { PersonaFull } from 'src/app/model/personaFull';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {

  public id: number = Number(this.route.snapshot.paramMap.get('id'));
  public reciboPersona: PersonaFull;

  paises: string[] = this.personaService.getPaises();
  generos: string[] = this.personaService.getGeneros();
  estado: string;

  seleccionGenero: string;
  seleccionPais: string;
  
  personaAGuardar: PersonaFull;
  contactoDtoAGuardar: Contacto;

  personaForm = this.fB.group({
    id: <number>0,
    apellido: 'NC',
    nombre: 'NC',
    dni: 'NC',
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
    private router: Router,
    private route: ActivatedRoute
    ) 
  {}

  ngOnInit() {
    this.findById(this.id);
  }

  findById(id: number): any{
    this.personaService.findById(id)
    .subscribe(
      (response: any) => {
        this.reciboPersona = response as PersonaFull;
        this.actualizarPersona(response);
      }
    );
  }
  delete(id: number): any{
    this.personaService.delete(id)
    .subscribe(
      (response: any) => {
        this.reciboPersona = response as PersonaFull;
        this.actualizarPersona(response);
      }
    );
  }
  
  actualizarPersona(rp: PersonaFull){
    this.personaForm.setValue({
      id: rp.id,
      apellido: rp.apellido,
      nombre: rp.nombre,
      dni: rp.dni,
      sexo: rp.sexo,
      contactoId: rp.contactoDTO.contactoId,
      pais:  rp.contactoDTO.pais,
      provincia:  rp.contactoDTO.provincia,
      departamento:  rp.contactoDTO.departamento,
      localidad:  rp.contactoDTO.localidad,
      calle:  rp.contactoDTO.calle,
      numero: rp.contactoDTO.numero,
      telefono1: rp.contactoDTO.telefono1,
      telefono2: rp.contactoDTO.telefono2,
      mail: rp.contactoDTO.mail,
      estado: this.resolverEstado(rp.estado)
    });
    this.seleccionGenero = rp.sexo;
    this.seleccionPais = rp.contactoDTO.pais;

    Object.entries(rp).forEach(([key, value]) => {
      console.log(key + " --> "+ value);
      if(key == 'contactoDTO'){
        Object.entries(value).forEach(([key, value]) => {
          console.log(key + " --> "+ value);
        })
      }
    });
  }
  verCambio(id: number){
    console.log(this.personaForm.value.estado);
    this.delete(id);
  }
  resolverEstado(estado: boolean): string{
    if(estado) {
      return "ACTIVO";
    } 
    else{
      return "INACTIVO";
    }
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
    this.cancel;
    }
  
    cancel(){
      this.router.navigate(['personas/']);
    }
}