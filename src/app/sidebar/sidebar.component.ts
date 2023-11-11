import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar-service/sidebar.service';
import { StorageService } from '../Storage-service/storage-service.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  list = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      path: '/',
    },
    {
      number: '2',
      name: 'to-do list',
      icon: 'fas fa-list',
      path: 'todo',
    },
    {
      number: '3',
      name: 'Login list',
      icon: 'fas fa-list',
      path: 'login',
    }
  ];

  constructor(private sidebarService: SidebarService,  private storageService: StorageService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebarService.setSideNavStatus(!this.sidebarService._sideNavStatus);
  }
  
  get isLoggedIn(): boolean {
    return this.storageService.getIsLoggedIn();
  }
}
