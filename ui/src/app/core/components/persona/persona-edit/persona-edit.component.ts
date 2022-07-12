import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Contacto } from 'src/app/model/contacto';
import { PersonaFull } from 'src/app/model/personaFull';
import { PersonaDialogComponent } from '../persona-dialog/persona-dialog.component';

interface Paises{value: string};
interface Estados{value: boolean; verValor: string};
interface Generos{value: string};

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {
  seleccionPais: string;
  paises: Paises[] = [
    {value: 'Argentina'},
    {value: 'Uruguay'},
    {value: 'Brasil'},
    {value: 'Chile'},
    {value: 'Paraguay'},
    {value: 'Bolivia'}
  ];
  seleccionadoPais = this.reciboPersona.contactoDTO.pais;
  seleccionEstado: boolean;
  estados: Estados[] = [{value: true , verValor: 'ACTIVO'}, {value: false , verValor: 'INACTIVO'}];
  seleccionGenero: string;
  seleccionadoGenero = this.reciboPersona.sexo;
  generos: Generos[] = [{value: 'Mujer'}, {value: 'Varon'},{value: 'Mujer trans'},{value: 'Varon trans'}, {value: 'No definido'}];
  
  inPersona: PersonaFull;
  inContactoDto: Contacto;
  personaForm: FormGroup = this.formBuilder.group({
    id: this.reciboPersona.id,
    apellido: new FormControl(this.reciboPersona.apellido, Validators.required),
    nombre: new FormControl(this.reciboPersona.nombre),
    dni: new FormControl(this.reciboPersona.dni),
    sexo: new FormControl(this.reciboPersona.sexo),
    contactoId: this.reciboPersona.contactoDTO.contactoId, 
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
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public reciboPersona: PersonaFull,
    private personaService: PersonaService) {
  }
  

  ngOnInit() {
    //console.log(this.reciboPersona);
  }
  save(){
    this.inContactoDto = {
      contactoId: this.personaForm.value.contactoId,
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
    this.inPersona = {
      id: this.personaForm.value.id,
      dni: String(this.personaForm.value.dni),
      apellido: this.personaForm.value.apellido,
      nombre: this.personaForm.value.nombre,
      sexo: this.personaForm.value.sexo,
      estado: this.personaForm.value.estado,
      contactoDTO: this.inContactoDto
      };
      let respuesta: any;
      this.personaService.updateOurUpdate(this.inPersona).subscribe((response: any) => {
        respuesta = response as PersonaFull;
      });
      console.log(respuesta);
      this.cancel();
      this.volver(this.inPersona.id);
    }
    volver(id: number){
      this.dialog.open(PersonaDialogComponent, {
        disableClose: false,
        width: 'auto',
        data: id
      });
    }
    cancel(){
      this.dialogRef.close(this.inPersona.id);
    }
}