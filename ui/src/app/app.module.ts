import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PersonaListComponent } from './core/persona/Components/persona-list/persona-list.component';
import { PersonaDialogComponent } from './core/persona/Components/persona-dialog/persona-dialog.component';
import { AnimalListComponent } from './core/animal/Components/animal-list/animal-list.component';
import { AnimalDialogComponent } from './core/animal/Components/animal-dialog/animal-dialog.component';
import { ChipDialogComponent } from './core/chip/Components/chip-dialog/chip-dialog.component';
import { ChipListComponent } from './core/chip/Components/chip-list/chip-list.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PersonaService } from './core/persona/Services/persona.service';
import { AnimalService } from './core/animal/Services/animal.service';
import { MenuItems } from './shared/model/menu-items/menuItems';
import { AnimalNuevoComponent } from './core/animal/Components/Animal-nuevo/Animal-nuevo.component';
import { MatSelectModule } from '@angular/material/select';

//Entidad Persona



//Entidad Animal



@NgModule({
  declarations: [
    AppComponent,
    PersonaListComponent,
    PersonaDialogComponent,
    AnimalListComponent,
    AnimalDialogComponent,
    AnimalNuevoComponent,
    ChipDialogComponent,
    ChipListComponent,
    SidenavComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,

    MatToolbarModule,
    FormsModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  providers: [PersonaService,AnimalService,MenuItems ],
  bootstrap: [AppComponent]
})
export class AppModule { }
