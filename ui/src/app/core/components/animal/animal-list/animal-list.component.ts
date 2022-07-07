import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalService } from 'src/app/core/services/animal.service';
import { Animal } from 'src/app/model/animal';
import { AnimalDialogComponent } from '../animal-dialog/animal-dialog.component';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animalList: Animal[];
  displayedColumn: string[] = ['id', 'nombre', 'dniDuenio', 'especie', 'acciones'];

  constructor(
    public dialog: MatDialog,
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
  }
  GetPersonaList(): void{
    this.animalService.FindAll().subscribe(
      (response: any) => {
        this.animalList = response as Animal[];
      }
    );
  }
  edit(idAnimal: number, dniDuenio: string){
    const ids = [idAnimal, dniDuenio];
    const dialogEdit = this.dialog.open(AnimalDialogComponent,{
      disableClose: false,
      width: 'auto',
      data: ids
    });
  }
  Delete(id: number){
    
  }

}
