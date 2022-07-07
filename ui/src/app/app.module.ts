import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Angular material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

//Entidad Persona
import { PersonaListComponent } from './core/components/persona/persona-list/persona-list.component';
import { PersonaService } from './core/services/persona.service';
import { PersonaDialogComponent } from './core/components/persona/persona-dialog/persona-dialog.component';
import { AnimalService } from './core/services/animal.service';

//Entidad Animal
import { AnimalListComponent } from './core/components/animal/animal-list/animal-list.component';
import { AnimalDialogComponent } from './core/components/animal/animal-dialog/animal-dialog.component';

import { ChipDialogComponent } from './core/components/chip/chip-dialog/chip-dialog.component';
import { ChipListComponent } from './core/components/chip/chip-list/chip-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListComponent,
    PersonaDialogComponent,
    AnimalListComponent,
    AnimalDialogComponent,
    ChipDialogComponent,
    ChipListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  providers: [PersonaService,AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
