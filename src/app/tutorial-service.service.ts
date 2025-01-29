import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from './tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {

baseUrl = 'http://localhost:8080/api/tutorials';

  constructor(private http:HttpClient) { }

  getAll():Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(this.baseUrl);
  }

  create(data:any):Observable<any>{
    return this.http.post(this.baseUrl,data);
  }

}//cierra servicio
