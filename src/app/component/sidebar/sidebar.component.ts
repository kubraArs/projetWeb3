import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../service/sidebar-service/sidebar.service';
import { Observable } from 'rxjs';
import { StorageService } from '../../service/Storage-service/storage-service.component';
import { LoginService } from 'src/app/service/login-service/login.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loggedin$: Observable<boolean>;                  
  user : User;
  constructor(private loginService: LoginService) {
    this.user = {username:'', password:''};
    
  }

  
  ngOnInit(){

    this.loginService.refreshNavBar.subscribe( (val:any) => {
      this.loggedin$ = val;
    });
    
    this.user = {username:'', password:''};
    this.user = this.loginService.utilisateurCourant
 
      
  }
  
  onLogout(): void {
    this.loginService.logout();    

  } 
 
}
