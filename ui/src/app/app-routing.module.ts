import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './core/animal/Components/animal-list/animal-list.component';
import { ChipListComponent } from './core/chip/Components/chip-list/chip-list.component';
import { PersonaListComponent } from './core/persona/Components/persona-list/persona-list.component';

const routes: Routes = [
  { path:'personas', component:PersonaListComponent},
  { path:'animales', component:AnimalListComponent },
  { path:'chips', component: ChipListComponent },
  { path:'**', redirectTo:''}

];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {} ;
