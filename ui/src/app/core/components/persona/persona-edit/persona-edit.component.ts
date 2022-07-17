import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';

import { PersonaService } from 'src/app/core/components/persona/services/persona.service';
import { Contacto } from 'src/app/model/contacto';
import { PersonaFull } from 'src/app/model/personaFull';

interface Estados{value: boolean; verValor: string};

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {

  public id: number = Number(this.route.snapshot.paramMap.get('id'));
  public reciboPersona: PersonaFull = {
    id: 0,
    apellido: 'pummmmmmmm',
    nombre: '',
    dni: '',
    sexo:  '',
    estado: true,
    contactoDTO: new Contacto()
  };

  paises: string[] = this.personaService.getPaises();
  generos: string[] = this.personaService.getGeneros();
  estados: Estados[] = this.personaService.getEstados();

  seleccionEstado: boolean;
  seleccionGenero: string;
  seleccionadoPais: string;
  seleccionadoGenero: string;
  
  personaAGuardar: PersonaFull;
  contactoDtoAGuardar: Contacto;

  personaForm = this.fB.group({
    id: [0],
    apellido: [this.reciboPersona.apellido],
    nombre: [],
    dni: [],
    sexo:  [],
    contactoId: [],
    pais:  [],
    provincia:  [],
    departamento:  [],
    localidad:  [],
    calle:  [],
    numero:  [],
    telefono1:  [],
    telefono2:  [],
    mail:  [],
    estado:  []
  });

  constructor(
    private fB: FormBuilder,
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
    ) {}
    
    

    ngOnInit() {
    console.log('el # cargado en el ID de persona_edit es: '+ this.id);
    this.reciboPersona = this.findById(this.id);
    // console.log(this.reciboPersona);
    this.actualizaPersona(this.reciboPersona);
  }

  actualizaPersona(rp: PersonaFull){
    
    
    console.log("llego a la linea 71" +  rp.apellido);
    this.reciboPersona.apellido = rp.apellido;

    this.personaForm.value.apellido = 'rp.apellido';

    // this.personaForm.setValue({
    //   id: number | null;
    // apellido: string | null;
    // nombre: null;
    // dni: null;
    // sexo: null;
    // contactoId: null;
    // pais: null;
    // provincia: null;
    // departamento: null;
    // localidad: null;
    // calle: null;
    // numero: null;
    // telefono1: null;
    // telefono2: null;
    // mail: null;
    // estado: null;
    // } )
  }
    
  findById(id: number): any{
    var resp = this.personaService.findById(id)
    .subscribe(
      (response: any) => {
        response as PersonaFull;
      }
    );
    return resp;
  }
  
  save(){
    // this.contactoDtoAGuardar = {
    //   contactoId: Number(this.personaForm.value.contactoId),
    //   pais: this.personaForm,
    //   provincia: this.personaForm.value.provincia,
    //   departamento: this.personaForm.value.departamento,
    //   localidad: this.personaForm.value.localidad,
    //   calle: this.personaForm.value.calle,
    //   numero: this.personaForm.value.numero,
    //   telefono1: this.personaForm.value.telefono1,
    //   telefono2: this.personaForm.value.telefono2,
    //   mail: this.personaForm.value.mail
    };
    // this.personaAGuardar = {
    //   id: this.personaForm.value.id,
    //   dni: String(this.personaForm.value.dni),
    //   apellido: this.personaForm.value.apellido,
    //   nombre: this.personaForm.value.nombre,
    //   sexo: this.personaForm.value.sexo,
    //   estado: this.personaForm.value.estado,
    //   contactoDTO: this.contactoDtoAGuardar
    //   };
    //   let respuesta: any;
    //   this.personaService.updateOurUpdate(this.personaAGuardar).subscribe((response: any) => {
    //     respuesta = response as PersonaFull;
    //   });
    //   console.log(this.personaAGuardar);
    //   console.log(respuesta);
    //   this.cancel();
    //   // this.refreshMain();
    //}
    
    cancel(){
    }

    refreshMain(): void{
      this.router.navigateByUrl('personas');
    };
}