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


}
