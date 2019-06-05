import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  //OBETENER LISTADO DE USUARIOS
  getUsers(){
    let method = "https://jsonplaceholder.typicode.com/users";
    return this.httpGet(method);
  }

  //FUNCION GENERICA HTTPGET
  httpGet(method): Observable<any> {
    let header = new HttpHeaders()
    return this.http.get(method, {headers: header});
  }
}