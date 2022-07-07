import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Animal } from 'src/app/model/animal';
import { AnimalFull } from 'src/app/model/animalFull';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private API_URL = environment.baseUrl;
  private apiUrl = this.API_URL+'animal/';

  constructor(
    private http: HttpClient
  ) { }

  FindAll(): Observable<Animal[]>{
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response as Animal[])
    );
  }
  FinById(id: number): Observable<AnimalFull>{
    return this.http.get(this.apiUrl+id).pipe(
      map((response: any) => response as AnimalFull)
    );
  }
  CreateOurUpdate(animal: AnimalFull): Observable<any>{
    const path = this.apiUrl+"Update";
    return this.http.put<AnimalFull>(path, animal);
  }
  Delete(id: number): Observable<any>{
    const path = this.apiUrl+id;
    return this.http.put<any>(path, id);
  }
}
