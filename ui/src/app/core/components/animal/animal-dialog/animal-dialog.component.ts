import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from 'src/app/core/services/animal.service';
import { AnimalFull } from 'src/app/model/animalFull';
import { PersonaFull } from 'src/app/model/personaFull';
import { PersonaDialogComponent } from '../../persona/persona-dialog/persona-dialog.component';
import { PersonaService } from '../../persona/services/persona.service';

@Component({
  selector: 'app-animal-dialog',
  templateUrl: './animal-dialog.component.html',
  styleUrls: ['./animal-dialog.component.css']
})
export class AnimalDialogComponent implements OnInit {

  animal: AnimalFull;
  duenio:PersonaFull;
  estado: string = "VACIO";

  constructor(
    public dialog: MatDialog,

    public dialogRef: MatDialogRef<AnimalDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
      public ids: any[],
      private animalService: AnimalService,
      private personaService: PersonaService

  ) { }

  ngOnInit(): void {
    this.findByIdDialog(this.ids);
    console.log(this.ids)
  }
  save(){

  }
  cancel(){
    this.dialogRef.close();
  }

  findByIdDialog(ids:any[]): any{
    this.animalService.findById(ids[0])
    .subscribe(
      (response: any) => {
        this.animal = response as AnimalFull;
        this.resolverEstado(this.animal.estado);
      }
    );
    this.personaService.findByDni(ids[1])
      .subscribe(
        (response: any) => {
          this.duenio = response as PersonaFull;
          console.log(this.duenio)
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
    console.log(this.estado);
  }

  detallePersona(id: number){
    const dialogEdit = this.dialog.open(PersonaDialogComponent, {
      disableClose: false,
      width: 'auto',
      data: id
    });

  }

}
