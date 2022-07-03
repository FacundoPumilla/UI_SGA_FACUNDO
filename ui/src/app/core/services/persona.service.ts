import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_URL = environment.baseUrl;
  private apiUrl = this.API_URL + 'Persona';
  constructor(
    private http:HttpClient
  ) { }

  findAll():Observable<Persona[]>{
    return this.http.get(this.apiUrl).pipe(
      map((response:any)=> response as Persona[])
    )
  }
}
