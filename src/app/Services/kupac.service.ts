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

  public addKupca(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/kupac`, data);
  }

  public deleteKupca(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/kupac/${id}`)
  }

  public getKupacByID(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/kupac/${id}`);
  }

  public updateKupca(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/kupac/${id}`, data);
  }
}
