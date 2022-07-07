import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Chip } from 'src/app/model/chip';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChipService {
  private API_URL = environment.baseUrl;
  private apiUrl = this.API_URL + 'Chip/';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Chip[]>{
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response as Chip[])
    );
  }
}
