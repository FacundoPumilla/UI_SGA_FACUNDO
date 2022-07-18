import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';
import { PersonaDialogComponent } from './persona-dialog/persona-dialog.component';
import { PersonaRoutingModule } from './persona-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './services/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonaNewComponent } from './persona-new/persona-new.component';

@NgModule({
  declarations: [
    PersonaListComponent,
    PersonaEditComponent,
    PersonaDialogComponent,
    PersonaNewComponent,
    
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,

    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,

    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    PersonaService
  ]
})
export class PersonaModule { }
