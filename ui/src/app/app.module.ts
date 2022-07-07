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
//Entidad Persona
import { PersonaListComponent } from './core/components/persona/persona-list/persona-list.component';
import { PersonaService } from './core/services/persona.service';
import { PersonaDialogComponent } from './core/components/persona/persona-dialog/persona-dialog.component';
import { ChipListComponent } from './core/components/chip/chip-list/chip-list.component';
import { ChipService } from './core/services/chip.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListComponent,
    PersonaDialogComponent,
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
  ],
  providers: [
    PersonaService,
    ChipService
  ],
  entryComponents: [
    PersonaDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
