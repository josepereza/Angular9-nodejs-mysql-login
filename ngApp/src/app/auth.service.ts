import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin:boolean;
  private _registerApi="http://localhost:3000/api/identidad/register"
  private _loginApi="http://localhost:3000/api/identidad/login"
  constructor(
    private http:HttpClient,
    private route:Router
  ) {}

    registerUserApi(user){
      return this.http.post<any>(this._registerApi,user)
    }
    loginUserApi(user){
      return this.http.post<any>(this._loginApi,user)
    }

    logout(){
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('admin');
      this.admin=false;

      this.route.navigate(['/events'])
    }

    islogin(){
      return !!sessionStorage.getItem('token')
    }


    getToken(){
      return sessionStorage.getItem('token')
    }

}
