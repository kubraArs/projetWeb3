import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from '../todo/todo.component';
import { RegisterComponent } from '../Register/register.component'
import { LoginComponent } from '../Login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'todo', component: TodoComponent},
  { path: 'register', component: RegisterComponent } ,
  { path: 'login', component: LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {
}