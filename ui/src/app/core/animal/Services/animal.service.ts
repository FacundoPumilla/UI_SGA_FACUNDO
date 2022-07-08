import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Animal } from 'src/app/core/animal/Models/animal';
import { environment } from 'src/environments/environment';
import { AnimalFull } from '../Models/animalFull';

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
