import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar-service/sidebar.service';

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
  ];

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebarService.setSideNavStatus(!this.sidebarService._sideNavStatus);
  }
}
