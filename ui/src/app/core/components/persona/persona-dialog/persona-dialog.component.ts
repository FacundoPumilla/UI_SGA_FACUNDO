import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaService } from 'src/app/core/services/persona.service';
import { PersonaFull } from 'src/app/model/personaFull';
import { PersonaEditComponent } from '../persona-edit/persona-edit.component';

@Component({
  selector: 'app-persona-dialog',
  templateUrl: './persona-dialog.component.html',
  styleUrls: ['./persona-dialog.component.css']
})
export class PersonaDialogComponent implements OnInit {

  persona: PersonaFull;
  estado: string;

  constructor(
    public dialogRef: MatDialogRef<PersonaDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
      public id: number,
      public dialog: MatDialog,
      private personaService: PersonaService,
  ) {

  }

  ngOnInit(): void {
    this.findByIdDialog(this.id);
  }
  
  save(): void{
    console.log(this.persona.id);
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
    if(estado) {
      this.estado = "ACTIVO";
    } 
    else{
      this.estado = "INACTIVO";
    }
  }
  edit(persona: PersonaFull){
    this.cancel();
    this.dialog.open(PersonaEditComponent, {
      disableClose: false,
      width: 'auto',
      data: persona
    });
  }

  cancel(): void{
    this.dialogRef.close();
  }
}