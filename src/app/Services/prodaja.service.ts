import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdajaService {

  constructor(private http: HttpClient) { }

  public getProdaje() : Observable<any>{
    return this.http.get<any[]>(`http://localhost:8081/api/prodaja`);
  }
}
