import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PisacService {

  constructor(private http: HttpClient) { }

  public getPisce() : Observable<any>{
    return this.http.get<any[]>(`http://localhost:8081/api/pisci`);
  }

  public addPisca(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/pisci`, data);
  }

  public deletePisca(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/pisci/${id}`)
  }

  public getPisacByID(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/pisci/${id}`);
  }

  public updatePisac(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/pisci/${id}`, data);
  }

  public getKnjigeByPisac(id:any): Observable<any>{
    return this.http.get(`http://localhost:8081/api/knjigePisci/pisac/${id}`)
  }

}
