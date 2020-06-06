import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IKnjiga } from '../knjiga/knjiga';


@Injectable({
  providedIn: 'root'
})

export class KnjigaService {

  constructor(private http:HttpClient) {  }

  public getKnjige() : Observable <IKnjiga[]>{
    return this.http.get<IKnjiga[]>(`http://localhost:8081/api/knjiga`);
  }
}