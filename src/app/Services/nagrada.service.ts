import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NagradaService {

  constructor(private http: HttpClient) { }

  public getNagrade() : Observable<any>{
    return this.http.get<any[]>(`http://localhost:8081/api/nagrada`);
  }

  public addNagradu(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/nagrada`, data);
  }

  public deleteNagradu(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/nagrada/${id}`)
  }

  public getNagradaById(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/nagrada/${id}`);
  }

  public updateNagradu(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/nagrada/${id}`, data);
  }

  public getKnjigeByNagrada(id:any): Observable<any>{
    return this.http.get(`http://localhost:8081/api/knjigaNagrada/nagrada/${id}`)
  }

}
