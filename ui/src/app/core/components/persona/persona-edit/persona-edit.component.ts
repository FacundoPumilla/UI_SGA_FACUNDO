import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Contacto } from 'src/app/model/contacto';
import { PersonaFull } from 'src/app/model/personaFull';

interface Estados{value: boolean; verValor: string};

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {


  paises: string[] = this.personaService.getPaises();
  generos: string[] = this.personaService.getGeneros();
  estados: Estados[] = this.personaService.getEstados();

  seleccionEstado: boolean;
  seleccionGenero: string;
  seleccionadoPais: string;
  seleccionadoGenero: string;
  
  personaAGuardar: PersonaFull;
  contactoDtoAGuardar: Contacto;

  personaForm: FormGroup = this.formBuilder.group({
    id: [],
    apellido: [],
    nombre: [],
    dni: [],
    sexo:  [],
    contactoId: [],
    pais:  [],
    provincia:  [],
    departamento:  [],
    localidad:  [],
    calle:  [],
    numero:  [],
    telefono1:  [],
    telefono2:  [],
    mail:  [],
    estado:  []
  });

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PersonaEditComponent>,
    @Inject(MAT_DIALOG_DATA)
    public reciboPersona: PersonaFull,
    private personaService: PersonaService,
    private router: Router) {
  }
  
  ngOnInit() {
    //console.log(this.reciboPersona.apellido);
  }
  findByIdDialog(id: number): any{
    return this.personaService.findById(id)
    .subscribe(
      (response: any) => {
        response as PersonaFull;
      }
    );
  }
  save(){
    this.contactoDtoAGuardar = {
      contactoId: Number(this.personaForm.value.contactoId),
      pais: this.personaForm.value.pais,
      provincia: this.personaForm.value.provincia,
      departamento: this.personaForm.value.departamento,
      localidad: this.personaForm.value.localidad,
      calle: this.personaForm.value.calle,
      numero: this.personaForm.value.numero,
      telefono1: this.personaForm.value.telefono1,
      telefono2: this.personaForm.value.telefono2,
      mail: this.personaForm.value.mail
    };
    this.personaAGuardar = {
      id: this.personaForm.value.id,
      dni: String(this.personaForm.value.dni),
      apellido: this.personaForm.value.apellido,
      nombre: this.personaForm.value.nombre,
      sexo: this.personaForm.value.sexo,
      estado: this.personaForm.value.estado,
      contactoDTO: this.contactoDtoAGuardar
      };
      let respuesta: any;
      this.personaService.updateOurUpdate(this.personaAGuardar).subscribe((response: any) => {
        respuesta = response as PersonaFull;
      });
      console.log(this.personaAGuardar);
      console.log(respuesta);
      this.cancel();
      // this.refreshMain();
    }
    
    cancel(){
    }
    refreshMain(): void{
      this.router.navigateByUrl('personas');
    };
}