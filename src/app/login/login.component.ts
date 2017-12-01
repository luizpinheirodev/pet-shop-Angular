import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { error } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'ttt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  username: string
  password: string

  constructor(private loginService: LoginService, 
              private router: Router) { }

  ngOnInit() {
  }

  doLogin(){
    this.loginService.login(this.username, this.password).subscribe(
      data=>{
        if(data){
          this.router.navigate(['produtos/novo'])
        }else{
          alert("Usuário os senha inválido")
        }
      }
    )
  }
}
