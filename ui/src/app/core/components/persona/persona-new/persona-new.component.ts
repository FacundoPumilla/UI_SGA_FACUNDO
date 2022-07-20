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

  private mensajesErrores: any = {
    'apellido' : {
      'minlength' : 'El campo debe tener al menos 3 caracteres',
      'maxlength' : 'El campo debe tener maximo 20 caracteres',
      'required' : 'Ingrese un apellido valido',
      'pattern' : 'Solo se permiten letras'
    },
    'nombre' : {
      'minlength' : 'El campo debe tener al menos 3 caracteres',
      'maxlength' : 'El campo debe tener maximo 20 caracteres',
      'required' : 'Ingrese un nombre valido',
      'pattern' : 'Solo se permiten letras'
    },
    'dni' : {
      'minlength' : 'El campo debe tener al menos 7 caracteres',
      'maxlength' : 'El campo debe tener maximo 8 caracteres',
      'required' : 'Ingrese un DNI valido',
      'pattern' : 'Solo se permiten numeros'
    },
    'sexo' : {
      'required' : 'Seleccione un genero'
    }
  };

  personaForm = this.fB.group({
    id: <number>0,
    apellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern("^[a-zA-Z_-]*$")]],
    nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern("^[a-zA-Z_-]*$")]],
    dni: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
    sexo: ['', [Validators.required]],
    contactoId: 0,
    pais: ['', [Validators.required]],
    provincia: ['', [Validators.required]],
    departamento: ['', [Validators.required]],
    localidad: ['', [Validators.required]],
    calle: ['', [Validators.required]],
    numero: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    telefono1: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    telefono2: '',
    mail: ['', [Validators.required, Validators.email]],
    estado: 'ACTIVO',
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
      if(this.personaForm.invalid){
        this.personaForm.markAllAsTouched;

        console.log("FORMULARIO INVALIDO");
      }
      if(this.personaForm.valid){

        // let respuesta: any;
        // this.personaService.updateOurUpdate(this.personaAGuardar).subscribe((response: any) => {
        //   respuesta = response as PersonaFull;
        // });
        console.log("no hay errores");
        // Object.entries(this.personaAGuardar).forEach(([key, value]) => {
        //   console.log(key + " --> "+ value);
        //   if(key == 'contactoDTO'){
        //     Object.entries(value).forEach(([key, value]) => {
        //       console.log(key + " --> "+ value);
        //     })
        //   }
        // });
      // this.cancel();
      }
    }
  
    cancel(){
      this.router.navigate(['personas/']).then(() => {
        window.location.reload();
      });
    };
    getError(controlName: string): string {
      let error = '';
      const control = this.personaForm.get(controlName);
      if (control?.touched && control.errors){
        let key = Object.keys(control.errors)[0];
        error = this.mensajesErrores[controlName][key];
      }
      return error;
    }
}
