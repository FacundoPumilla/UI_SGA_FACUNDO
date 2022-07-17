import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/core/components/persona/services/persona.service';
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
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.GetPersonaList();
  }

  goToForm(_data: PersonaFull){
    this.router.navigate(['personas/edit/'+ _data.id]);
  }
  GetPersonaList():void{
    this.personaService.findAll().subscribe((response:any)=>{
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
    this.dialog.open(PersonaEditComponent, {
      disableClose: false,
      width: 'auto',
      data: id
    });
  };
  delete(id: number){

  };


}
