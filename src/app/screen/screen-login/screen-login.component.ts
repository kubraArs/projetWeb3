import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router'; 
import { StorageService } from '../../service/Storage-service/storage-service.component';
import { LoginService } from 'src/app/service/login-service/login.service';

@Component({
  selector: 'app-screen-login',
  templateUrl: './screen-login.component.html',
  styleUrls: ['./screen-login.component.css']
})

export class ScreenLoginComponent implements OnInit {

  logedin = false;
  register = false;
  
  constructor(private storageService: StorageService, private router: Router, private loginService: LoginService){}

 async ngOnInit(): Promise<void> {
      if(await this.loginService.isLoggedIn()===true){
        this.logedin = true;
        this.router.navigate(['/todo']); 
        console.log("already loged in")
      } 
      
  }
}
