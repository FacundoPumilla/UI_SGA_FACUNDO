import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from '../../Services/persona.service';
import { PersonaDialogComponent } from '../persona-dialog/persona-dialog.component';

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
    this.GetPersonaList()
  }
  GetPersonaList():void{
    this.personaServices.findAll().subscribe((response:any)=>{
      this.personaList= response as Persona[];
      console.log(this.personaList);
    })
  }

  edit(id: number){
    const dialogEdit = this.dialog.open(PersonaDialogComponent, {
      disableClose: false,
      width: 'auto',
      data: id
    });

  }
  delete(id: number){

  }


}
