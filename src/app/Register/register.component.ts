
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router'; 
import { StorageService } from '../Storage-service/storage-service.component';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    constructor(private storageService: StorageService, private router: Router) {}

    onSubmit(form: NgForm) { 
        const username = form.value.username;
        const hashedPassword = bcrypt.hashSync(form.value.password, 10);
        const user = {
            username: username,
            password: hashedPassword,
        }
        this.storageService.saveUserData(user);
        this.router.navigate(['/todo']); 
        this.storageService.setIsLoggedIn(true);
      }
}
