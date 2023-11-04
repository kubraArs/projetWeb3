import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AppRouting} from './routing/app-routing';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterLinkActive,
    RouterLink,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
