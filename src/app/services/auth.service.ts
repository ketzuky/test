import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body){
    console.log(body)
    let method = "https://reqres.in/api/login";
    return this.htppPost(method, body);
  }

  htppPost(method, body){
    let header = new HttpHeaders();
    return this.http.post(method, body, {headers: header});
  }
}