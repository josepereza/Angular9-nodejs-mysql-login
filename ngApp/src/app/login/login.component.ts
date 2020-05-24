import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerUserData={
    Usuario:"",
    Password:""
  };
  constructor(
    private service:AuthService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.service.loginUserApi(this.registerUserData).subscribe(
      res=>{
        this.service.admin=res.admin;
        sessionStorage.setItem('token',res.token);
        sessionStorage.setItem('admin', res.admin)
        console.log('mecago' ,res)
        
      },
      err=>console.log(err)
    )
  }

}
