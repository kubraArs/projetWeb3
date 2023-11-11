import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { StorageService } from '../Storage-service/storage-service.component';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string = '';
  constructor(private storageService: StorageService, private router: Router) {}

  onSubmit(form: NgForm) { 
    const username = form.value.username;
    const password = form.value.password;

    const storedUserData = this.storageService.getUserData();
    if (storedUserData && username === storedUserData.username && bcrypt.compareSync(password, storedUserData.password)) {
      this.storageService.setIsLoggedIn(true);
      this.router.navigate(['/todo']); 
    } else {
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
  }
}
