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

  public addKnjigu(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/knjiga`, data);
  }

  public deleteKnjigu(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/knjiga/${id}`)
  }

  public getKnjigaById(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/knjiga/${id}`);
  }

  public updateKnjigu(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/knjiga/${id}`, data);
  }

  public addKnjiguPiscu(data: any): Observable<any> {
    return this.http.post(`http://localhost:8081/api/knjigePisci/`, data);
  }

  public addKnjiguIzdavacu(data: any): Observable<any> {
    return this.http.post(`http://localhost:8081/api/knjigaIzdavac/`, data);
  }
}