import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KupacService {

  constructor(private http:HttpClient) { }

  public getKupce() : Observable<any>{
    return this.http.get<any[]>(`http://localhost:8081/api/kupac`);
  }
}
