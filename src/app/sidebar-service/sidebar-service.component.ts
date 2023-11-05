import { Component } from '@angular/core';
import { SidebarService } from '../sidebar-service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.setSideNavStatus(!this.sidebarService._sideNavStatus);
  }
}
