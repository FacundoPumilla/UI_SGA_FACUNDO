import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Animal } from 'src/app/core/animal/Models/animal';
import { AnimalService } from '../../Services/animal.service';
import { AnimalDialogComponent } from '../animal-dialog/animal-dialog.component';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalList:Animal[];
  displayedColumns: string[] = ['id','nombre','dniDuenio', 'especie','acciones'];

  constructor(
    public dialog: MatDialog,
    private animalServices: AnimalService
  ) { }

  ngOnInit(): void {
    this.GetPersonaList()
  }
  GetPersonaList():void{
    this.animalServices.findAll().subscribe((response:any)=>{
      this.animalList= response as Animal[];
      console.log(this.animalList);
    })
  }

  edit(idAnimal: number,dnidueno:string){
    const ids=[idAnimal,dnidueno]
    const dialogEdit = this.dialog.open(AnimalDialogComponent, {
      disableClose: false,
      width: 'auto',
      data: ids
    });

  }
  delete(id: number){

  }


}
