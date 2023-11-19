import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { AppRouting } from './routing/app-routing';
import { SidebarService } from './service/sidebar-service/sidebar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/Login/login.component';
import { RegisterComponent } from './component/Register/register.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ScreenProfilComponent } from './screen/screen-profil/screen-profil.component';
import { ScreenTodoComponent } from './screen/screen-todo/screen-todo.component';
import { ScreenLoginComponent } from './screen/screen-login/screen-login.component';
import { LoginService } from './service/login-service/login.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    ScreenProfilComponent,
    ScreenTodoComponent,
    ScreenLoginComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRouting,
    HttpClientModule,
  ],
  providers: [
    {provide: SidebarService},
    {provide: LoginService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
