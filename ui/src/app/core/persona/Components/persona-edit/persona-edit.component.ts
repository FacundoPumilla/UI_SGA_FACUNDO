import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaContacto } from 'src/app/model/personaContacto';
import { PersonaFull } from 'src/app/model/personaFull';
import { PersonaService } from '../../Services/persona.service';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {
  inPersona: PersonaFull;
  personaForm: FormGroup = this.formBuilder.group({
    apellido: new FormControl(this.reciboPersona.apellido, Validators.required),
    nombre: new FormControl(this.reciboPersona.nombre),
    dni: new FormControl(this.reciboPersona.dni),
    sexo: new FormControl(this.reciboPersona.sexo),
    pais: new FormControl(this.reciboPersona.contactoDTO.pais),
    provincia: new FormControl(this.reciboPersona.contactoDTO.provincia),
    departamento: new FormControl(this.reciboPersona.contactoDTO.departamento),
    localidad: new FormControl(this.reciboPersona.contactoDTO.localidad),
    calle: new FormControl(this.reciboPersona.contactoDTO.calle),
    numero: new FormControl(this.reciboPersona.contactoDTO.numero),
    telefono1: new FormControl(this.reciboPersona.contactoDTO.telefono1),
    telefono2: new FormControl(this.reciboPersona.contactoDTO.telefono2),
    mail: new FormControl(this.reciboPersona.contactoDTO.mail),
    estado: new FormControl(this.reciboPersona.estado)

  });

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PersonaEditComponent>,
    @Inject(MAT_DIALOG_DATA)
    private reciboPersona: PersonaFull,
    private personaService: PersonaService) {
  }
  _persona: PersonaContacto = {
    id: 0,
    dni: 'this.recibePersona.dni',
    apellido: '',
    nombre:      '',
    sexo:        '',
    estado:      true,
    contactoId:   0,
    pais:         '',
    provincia:    '',
    departamento: '',
    localidad:    '',
    calle:        '',
    numero:       0,
    telefono1:    '',
    telefono2:    '',
    mail:         ''
  };

  ngOnInit() {
    console.log(this.reciboPersona);
  }
  
}
