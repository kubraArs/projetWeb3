import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import userData from '../../user.json';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isPresent: any = null;
  data : {username:string, password:string}[];

  constructor() {    
    this.data = userData;
   }

  verifyLogin(user: User): boolean{

    console.log("user service : mapping : ", this.data.map(value => user.username == value.username && user.password == value.password).filter(value => value == true).length)
    
    return (this.data.map(value => user.username == value.username && user.password == value.password).filter(value => value == true).length ==1);
    
  }
}
