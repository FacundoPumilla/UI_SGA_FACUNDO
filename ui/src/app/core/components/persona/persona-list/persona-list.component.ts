import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Persona } from 'src/app/model/persona';
import { PersonaFull } from 'src/app/model/personaFull';
import { PersonaDialogComponent } from '../persona-dialog/persona-dialog.component';
import { PersonaComponent } from '../persona/persona.component';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  
  personaList: Persona[];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'dni', 'acciones']

  constructor(
    public dialog: MatDialog,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.getAllPersonaList()
  }
  
  
  getAllPersonaList(): void{
    this.personaService.findAll().subscribe( (response: any) => {
      this.personaList = response as Persona[];
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
