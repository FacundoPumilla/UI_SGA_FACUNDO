import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_URL = environment.baseUrl;
  private apiUrl = this.API_URL + '/persona/all'
  constructor(
    private http: HttpClient 
  ) {}

    
  //METODO listar todas las persona
  findAll(): Observable<Persona[]> {
    return this.http.get(this.apiUrl)
    .pipe(
      map((response: any) => response.persona as Persona[])
    )
  };
}
