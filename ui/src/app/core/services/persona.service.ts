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
  updateOurUpdate(persona: Persona): Observable<any>{
    const path = this.apiUrl+ "Update";
    return this.http.put<any>(path, persona);
  }
  delete(id: number): Observable<any>{
    const path = this.apiUrl + id;
    return this.http.put<any>(path, id);
  }
//   GetUser(id:number) {
//     try {
//       const response = this.http.get(this.apiUrl+id);

//       if(!response.ok){
//         throw new Error(`Error! Status: ${response.status}`);
//       }
//       const result = (await response.json()) as PersonaFull;
//       console.log('result is: ', JSON.stringify(result, null, 4));
//       return result;

//     } catch (error) {
//       if(error instanceof Error){
//         console.log('error message: ', error.message);
//         return error.message;
//       }else{
//         console.log('unexpected error: ', error);
//         return 'An unexpected error occurred';
//       }
//     }
//   }
// GetUser();
}
