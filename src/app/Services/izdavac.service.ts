import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IzdavacService {

  constructor(private http:HttpClient) { }

  public getIzdavace() : Observable<any>{
    return this.http.get<any[]>(`http://localhost:8081/api/izdavac`);
  }

  public addIzdavaca(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/izdavac`, data);
  }

  public deleteIzdavaca(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/izdavac/${id}`)
  }

  public getIzdavacByID(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/izdavac/${id}`);
  }

  public updateIzdavaca(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/izdavac/${id}`, data);
  }

  public getKnjigeByIzdavac(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/knjigaIzdavac/izdavac/${id}`)
  }

}
