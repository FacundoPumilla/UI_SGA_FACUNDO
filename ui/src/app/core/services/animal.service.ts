import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Animal } from 'src/app/model/animal';
import { AnimalFull } from 'src/app/model/animalFull';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private API_URL = environment.baseUrl;
  private apiUrl = this.API_URL + 'animal/';
  constructor(
    private http: HttpClient
  ) {}


  //METODO listar todas los animales
  findAll(): Observable<Animal[]> {
    return this.http.get(this.apiUrl)
    .pipe(
      map((response: any) => response as Animal[])
    );
  }
  findById(id: number): Observable<AnimalFull>{
    var result = this.http.get(this.apiUrl+id)
      .pipe(
        map((response: any) => response as AnimalFull)
      );
      return result;

  }
  updateOurUpdate(animal: Animal): Observable<any>{
    const path = this.apiUrl+ "Update";
    return this.http.put<any>(path, animal);
  }
  delete(id: number): Observable<any>{
    const path = this.apiUrl + id;
    return this.http.put<any>(path, id);
  }
}
