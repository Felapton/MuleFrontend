import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipKnjigeService {

  constructor(private http:HttpClient) { }
  
  public getTipKnjige() : Observable<any>{
    return this.http.get<any[]>(`http://localhost:8081/api/tipknjige`);
  }

  public addTipKnjige(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/tipknjige`, data);
  }

  public deleteTipKnjige(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/tipknjige/${id}`)
  }

  public getTipKnjigeByID(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/tipknjige/${id}`);
  }

  public updateTipKnjige(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/tipknjige/${id}`, data);
  }


}
