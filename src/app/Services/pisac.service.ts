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
}
