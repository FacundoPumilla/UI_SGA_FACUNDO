import { Component, OnInit } from '@angular/core';
import { ChipService } from 'src/app/core/services/chip.service';
import { Chip } from 'src/app/model/chip';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {

  chipList: Chip[];
  displayedColumns: string[] = ['codigoId', 'codigo', 'nombre', 'apellido', 'dni', 'acciones'];

  constructor(
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
  edit(id: number){

  }
  delete(id: number){

  }

}
