import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { LoginService } from 'src/app/service/login-service/login.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  hasError=false;
  errorMessage: string = '';
  isSubmitted  =  false;
  user: User;
  @Output() register = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.user={username:'', password:''};
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
    
  }


  ngOnInit(){

  
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

//  Eviter undified value quand l'objet retourné est null
    this.user = {username:'', password:''};
    this.user.username = this.loginForm.value.username || {};
    this.user.password = this.loginForm.value.password || {}
    this.user=this.loginService.login(this);
    
  }

  toRegister(){
    this.register = true;
    console.log("to register")
  }
}
