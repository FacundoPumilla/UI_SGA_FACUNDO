import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { PersonaFull } from 'src/app/model/personaFull';
import { environment } from 'src/environments/environment';

interface Estados{value: boolean; verValor: string};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_URL = environment.baseUrl;
  private apiUrl = this.API_URL + 'Persona/';
  
  //@Output() idEmitida: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) {}

  paises: string[] = ['ARGENTINA','URUGUAY','BRASIL','CHILE','PARAGUAY','BOLIVIA'];
  generos :string[] = ['MUJER','VARON','MUJER TRANS','VAROn TRANS','NO DEFINIDO'];
  estados: Estados[] = [{value: true , verValor: 'ACTIVO'},{value: false , verValor: 'INACTIVO'}];
  getPaises(): string[]{
    return this.paises;
  };
  getGeneros(): string[]{
    return this.generos;
  }
  getEstados(): Estados[]{
    return this.estados;
  }

  //METODO listar todas las persona
  findAll(): Observable<Persona[]> {
    return this.http.get(this.apiUrl)
    .pipe(
      map((response: any) => response as Persona[])
    );
  }
  findById(id: number): Observable<PersonaFull>{
    var result = this.http.get(this.apiUrl+id)
      .pipe(
        map((response: any) => response as PersonaFull)
      );
      return result;
  }
  findByDni(dni: string): Observable<PersonaFull>{
    var result = this.http.get(this.apiUrl+"dni/"+dni)
      .pipe(
        map((response: any) => response as PersonaFull)
      );
    return result;
  }
  updateOurUpdate(persona: PersonaFull): Observable<any>{
    const path = this.apiUrl+ "Update";
    return this.http.put<any>(path, persona);
  }
  delete(id: number): Observable<any>{
    const path = this.apiUrl + id;
    return this.http.put<any>(path, id);
  }
}
