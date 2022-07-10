import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PersonaFull } from 'src/app/model/personaFull';
import { Animal } from '../../Models/animal';
import { AnimalAgregar } from '../../Models/animalAgregar';
import { AnimalFull } from '../../Models/animalFull';
import { AnimalService } from '../../Services/animal.service';
import { TiposService } from '../../Services/tipos.service';

@Component({
  selector: 'app-Animal-nuevo',
  templateUrl: './Animal-nuevo.component.html',
  styleUrls: ['./Animal-nuevo.component.css']
})
export class AnimalNuevoComponent implements OnInit {

miformulario: FormGroup = this.formbuilder.group({
  nombre         :['',[Validators.required]],
  especieId      :[0,[Validators.required]],
  fechaNacimiento:[0,[Validators.required]],
  sexo           :['Macho',[Validators.required]],
  fechaChip      :['2022-07-10',[Validators.required]],
  pelaje         :['zaino',[Validators.required]],
  link           :['www.google.com',[Validators.required]],
  ambito         :['rural',[Validators.required]],
  uso            :['Carro',[Validators.required]],
  personaId      :['1',Validators.required],
})
  //lleno los Selects
  pelajes:string[]=[];
  sexos:string[]=[];

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
    private tipoService: TiposService
  ) { }

  ngOnInit():void {
    this.pelajes=this.tipoService.pelajes;
    this.sexos=this.tipoService.sexos;
  }
  agregar(){

    this.nuevoAnimal.nombre=this.miformulario.value.nombre;
    this.nuevoAnimal.especieId=this.miformulario.value.especieId;
    this.nuevoAnimal.fechaNacimiento=this.miformulario.value.fechaNacimiento;
    this.nuevoAnimal.sexo=this.miformulario.value.sexo;
    this.nuevoAnimal.fechaChip=this.miformulario.value.fechaChip;
    this.nuevoAnimal.pelaje=this.miformulario.value.pelaje;
    this.nuevoAnimal.link=this.miformulario.value.link;
    this.nuevoAnimal.ambito=this.miformulario.value.ambito;
    this.nuevoAnimal.uso=this.miformulario.value.uso;
    this.nuevoAnimal.personaId=this.miformulario.value.personaId;
    console.log("llego al ts")
    this.animalService.agregar(this.nuevoAnimal);
  }
}
