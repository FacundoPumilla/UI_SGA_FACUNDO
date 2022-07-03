import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  personaList:Persona[];
  displayedColumns: string[] = ['id','nombre','apellido', 'dni'];

  constructor(
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

}
