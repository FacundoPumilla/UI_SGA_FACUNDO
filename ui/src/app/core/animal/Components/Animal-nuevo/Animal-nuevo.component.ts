import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PersonaFull } from 'src/app/model/personaFull';
import { AnimalAgregar } from '../../Models/animalAgregar';
import { AnimalFull } from '../../Models/animalFull';
import { AnimalService } from '../../Services/animal.service';
import { PelajeService } from '../../Services/pelaje.service';

@Component({
  selector: 'app-Animal-nuevo',
  templateUrl: './Animal-nuevo.component.html',
  styleUrls: ['./Animal-nuevo.component.css']
})
export class AnimalNuevoComponent implements OnInit {
miformulario: FormGroup = this.formbuilder.group({
  pelaje:['',Validators.required]
})
  //lleno las pelajes
  pelajes:string[]=[];

  nuevoAnimal : AnimalAgregar = {
    id:0,
    nombre: '',
    especieId: 0,
    fechaNacimiento:'',
    sexo: '',
    fechaChip: '',
    pelaje: '',
    link: '',
    ambito: '',
    uso: '',
    personaId: 0,
  }

  constructor(
    private formbuilder: FormBuilder,
    private animalService: AnimalService,
    private pelajesService: PelajeService
  ) { }

  ngOnInit():void {
    this.pelajes=this.pelajesService.pelajes;
  }
  agregar(){
    console.log(this.nuevoAnimal)
  }
}
