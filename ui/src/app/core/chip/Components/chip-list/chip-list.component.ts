import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalDialogComponent } from 'src/app/core/animal/Components/animal-dialog/animal-dialog.component';

import { Chip } from '../../models/chip';
import { ChipService } from '../../Services/chip.service';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {

  chipList: Chip[];
  displayedColumns: string[] = ['codigoId', 'codigo', 'nombre', 'apellido', 'dni', 'acciones'];

  constructor(
    public dialog: MatDialog,
    private chipService: ChipService,
  ) { }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(): void {
    this.chipService.findAll().subscribe(
      (response: any) => {
        this.chipList = response as Chip[];
        console.log(this.chipList);
      }
    )
  }
  edit(idAnimal: number,dnidueno:string){
    const ids=[idAnimal,dnidueno]
    const dialogEdit = this.dialog.open(AnimalDialogComponent, {
      disableClose: false,
      width: 'auto',
      data: ids
    });}
  delete(id: number){

  }

}
