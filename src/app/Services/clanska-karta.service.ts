import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClanskaKartaService {

  constructor(private http: HttpClient) { }

  public getClanskeKarte() : Observable <any>{
    return this.http.get<any>(`http://localhost:8081/api/clanskakarta`);
  }

  public addClansku(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/clanskakarta`, data);
  }

  public deleteClansku(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/clanskakarta/${id}`)
  }

  public getClanskuByID(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/clanskakarta/${id}`);
  }

  public updateClansku(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/clanskakarta/${id}`, data);
}
}
