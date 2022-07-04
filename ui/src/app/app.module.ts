import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Angular material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
//Entidad Persona
import { PersonaComponent } from './core/components/persona/persona/persona.component';
import { PersonaListComponent } from './core/components/persona/persona-list/persona-list.component';
import { PersonaService } from './core/services/persona.service';
import { PersonaDialogComponent } from './core/components/persona/persona-dialog/persona-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonaListComponent,
    PersonaDialogComponent
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
    MatCheckboxModule
  ],
  providers: [
    PersonaService
  ],
  entryComponents: [
    PersonaDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
