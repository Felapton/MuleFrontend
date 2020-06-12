import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  public getKorisnike() : Observable<any>{
    return this.http.get<any[]>(`http://localhost:8081/api/korisnik`);
  }

  public addKorisnike(data: any): Observable<any>{
    return this.http.post(`http://localhost:8081/api/korisnik`, data);
  }

  public deleteKorisnika(id: any): Observable<any>{
    return this.http.delete(`http://localhost:8081/api/korisnik/${id}`)
  }

  public getKorisnikByID(id: any): Observable<any> {
    return this.http.get(`http://localhost:8081/api/korisnik/${id}`);
  }

  public updateKorisnika(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/korisnik/${id}`, data);
  }
}
