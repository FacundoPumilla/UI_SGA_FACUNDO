import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTab } from '@angular/material/tabs';
import { PersonaService } from 'src/app/core/services/persona.service';
import { PersonaFull } from 'src/app/model/personaFull';

@Component({
  selector: 'app-persona-dialog',
  templateUrl: './persona-dialog.component.html',
  styleUrls: ['./persona-dialog.component.css']
})
export class PersonaDialogComponent implements OnInit {

  persona: PersonaFull;
  estado: string = "VACIO";

  constructor(
    public dialogRef: MatDialogRef<PersonaDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
      public id: number,
      private personaService: PersonaService,
  ) { }

  ngOnInit(): void {
    this.findByIdDialog(this.id);
    
  }
  save(){
  }
  estadoChange($event: MatSlideToggleChange){
    this.persona.estado = !this.persona.estado;
    this.resolverEstado(this.persona.estado);
    console.log($event);
  }
  editar(){
    let btnEstado = <HTMLButtonElement>document.getElementById('estado');
    btnEstado.removeAttribute('disabled');
    let btnEditar = <HTMLButtonElement>document.getElementById('editar');
    btnEditar.style.display = 'none';
    let btnGuardar = <HTMLButtonElement>document.getElementById('guardar');
    btnGuardar.style.display = 'inline';
    let input = document.querySelectorAll('input');
    input?.forEach(function(inp) {
      inp.removeAttribute('readonly');
    });
  }
  cancel(){
    this.dialogRef.close();
  }
  findByIdDialog(id: number): any{
    this.personaService.findById(id)
    .subscribe(
      (response: any) => {
        this.persona = response as PersonaFull;
        this.resolverEstado(this.persona.estado);
      }
    )
  }
  resolverEstado(estado: boolean){
    console.log(estado);
    if(estado) {
      this.estado = "ACTIVO";
    } 
    else{
      this.estado = "INACTIVO";
    }
  }
}