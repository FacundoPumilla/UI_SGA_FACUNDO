import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Persona } from 'src/app/model/persona';
import { PersonaFull } from 'src/app/model/personaFull';
import { PersonaDialogComponent } from '../persona-dialog/persona-dialog.component';
import { PersonaEditComponent } from '../persona-edit/persona-edit.component';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  personaList:Persona[];
  displayedColumns: string[] = ['id','nombre','apellido', 'dni','acciones'];

  constructor(
    public dialog: MatDialog,
    private personaServices: PersonaService
  ) { }

  ngOnInit(): void {
    this.GetPersonaList();
  }
  GetPersonaList():void{
    this.personaServices.findAll().subscribe((response:any)=>{
      this.personaList= response as Persona[];
    });
  };
  detalles(id: number){
    
    this.dialog.open(PersonaDialogComponent, {
      disableClose: false,
      width: 'auto',
      data: id
    });
  };

  
  edit(id: number){
    var personaSend = this.personaServices.findById(id).subscribe((response: any) => {
      response as PersonaFull;
    });
    console.log(personaSend);
    this.dialog.open(PersonaEditComponent, {
      disableClose: false,
      width: 'auto',
      data: personaSend
    });
  };
  delete(id: number){

  };


}
