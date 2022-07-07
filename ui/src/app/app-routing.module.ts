import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './core/components/animal/animal-list/animal-list.component';
import { ChipListComponent } from './core/components/chip/chip-list/chip-list.component';
import { PersonaListComponent } from './core/components/persona/persona-list/persona-list.component';

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
