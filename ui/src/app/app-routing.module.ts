import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './core/components/animal/animal-list/animal-list.component';
import { ChipListComponent } from './core/components/chip/chip-list/chip-list.component';

const routes: Routes = [
  { 
    path:'personas',
    loadChildren: () => import('./core/components/persona/persona.module').then(m => m.PersonaModule)
  },
  { 
    path:'animales', component:AnimalListComponent 
  },
  { 
    path:'chips', component: ChipListComponent 
  },
  { 
    path:'**', redirectTo: ''
  }
  
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
