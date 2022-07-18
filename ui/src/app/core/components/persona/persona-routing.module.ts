import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaDialogComponent } from './persona-dialog/persona-dialog.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaNewComponent } from './persona-new/persona-new.component';

const routes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'list', component: PersonaListComponent
    },
    {
      path: 'edit/:id', component: PersonaEditComponent
    },
    {
      path: 'dialog', component: PersonaDialogComponent
    },
    {
      path: 'new', component: PersonaNewComponent
    },
    {
      path: '**', redirectTo: 'list'
    }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonaRoutingModule { }
