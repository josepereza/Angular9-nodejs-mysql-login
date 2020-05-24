import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  register(){
    this.service.registerUserApi(this.registerUserData).subscribe(
      res=>{
        //sessionStorage.setItem('token',res.token)
        console.log('esto viene del api', res)
        this.route.navigate(['/special'])
      }
    )
  }

}
