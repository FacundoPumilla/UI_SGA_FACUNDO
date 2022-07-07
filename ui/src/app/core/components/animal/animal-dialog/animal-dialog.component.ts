import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from 'src/app/core/services/animal.service';
import { PersonaService } from 'src/app/core/services/persona.service';
import { AnimalFull } from 'src/app/model/animalFull';
import { PersonaFull } from 'src/app/model/personaFull';
import { PersonaDialogComponent } from '../../persona/persona-dialog/persona-dialog.component';

@Component({
  selector: 'app-animal-dialog',
  templateUrl: './animal-dialog.component.html',
  styleUrls: ['./animal-dialog.component.css']
})
export class AnimalDialogComponent implements OnInit {

  animal: AnimalFull;
  duenio: PersonaFull;
  estado: string;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AnimalDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public ids; any[],
    private animalService: AnimalService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
  }
  save(){
      this.dialogRef.close();
  }
  FindByIdDialog(ids: any[]): any{
    this.animalService.FinById(ids[0]).subscribe(
      (response: any) => {
        this.animal = response as AnimalFull;
        this.ResolverEstado(this.animal.estado);
      }
    );
    this.personaService.findByDni(ids[1]).subscribe(
      (response: any) => {
        this.duenio = response as PersonaFull;
      }
    );
  }

  ResolverEstado(estado: boolean){
    console.log(estado);
    if(estado) {
      this.estado = "ACTIVO";
    }
    else{
      this.estado = "INACTIVO";
    }
    console.log(this.estado);
  }
  
  DetallePersona(id: number){
    const dialogEdit = this.dialog.open(
      PersonaDialogComponent, {
        disableClose: false,
        width: 'auto',
        data: id
      }
    );
  }
}
