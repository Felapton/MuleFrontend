import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class KnjigaService {

  constructor(private http:HttpClient) {  }

  public getKnjige() : Observable <any>{
    return this.http.get<any>(`http://localhost:8081/api/knjiga`);
  }
}