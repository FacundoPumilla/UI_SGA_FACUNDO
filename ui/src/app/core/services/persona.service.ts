import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { PersonaFull } from 'src/app/model/personaFull';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_URL = environment.baseUrl;
  private apiUrl = this.API_URL + 'Persona/';
  constructor(
    private http: HttpClient
  ) {}


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
