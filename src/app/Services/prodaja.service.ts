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

  public addProdaju(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/prodaja`, data);
  }

  public deleteProdaju(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/prodaja/${id}`)
  }

  public getProdajaById(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/prodaja/${id}`);
  }

  public updateProdaju(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/prodaja/${id}`, data);
}
}
