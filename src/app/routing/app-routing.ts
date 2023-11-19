import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ScreenTodoComponent } from '../screen/screen-todo/screen-todo.component';
import { ScreenLoginComponent } from '../screen/screen-login/screen-login.component';
import { ScreenProfilComponent } from '../screen/screen-profil/screen-profil.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'todo', component: ScreenTodoComponent },
  { path: 'profil', component: ScreenProfilComponent } ,
  { path: 'login', component: ScreenLoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {
}