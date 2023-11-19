import { Injectable, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../../component/Login/login.component';
import { BehaviorSubject} from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = new BehaviorSubject<boolean>(false); 

  utilisateur :User = {username:'', password:''};
  @Output() refreshNavBar: EventEmitter<any> = new EventEmitter();


  
  constructor(private userService: UserService, private router: Router) { }


  async isLoggedIn(){   
    
   
    if(localStorage.getItem("username_utilisateur")){
      this.refreshNavBar.emit(true);
      return true;
    } 
    else return false;
    
   
  }

  get utilisateurCourant() {
    return this.utilisateur; 
  }

  login(loginForm : LoginComponent): User  {      

    console.log("login.service : user : ", loginForm.user);
        
    if(this.userService.verifyLogin(loginForm.user)) {
      this.utilisateur = {username:loginForm.user.username, password:loginForm.user.password};
      localStorage.setItem("username_utilisateur", this.utilisateur.username);
      this.router.navigate(['/todo']);
      
    }else {
      loginForm.hasError=true;
      loginForm.errorMessage="Identification incorrecte";  
    }
      
      
    
   

return this.utilisateur;
}

logout() {                          
  this.loggedIn.next(false);    
  localStorage.removeItem("username_utilisateur");

  this.refreshNavBar.emit(false);
  this.router.navigate(['/login']);

}

}
