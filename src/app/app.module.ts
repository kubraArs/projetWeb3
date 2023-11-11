import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AppRouting } from './routing/app-routing';
import { SidebarService } from './sidebar-service/sidebar.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRouting,
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
