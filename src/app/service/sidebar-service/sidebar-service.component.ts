import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: '../../component/sidebar/sidebar.component.html',
  styleUrls: ['../../component/sidebar/sidebar.component.css']
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.setSideNavStatus(!this.sidebarService._sideNavStatus);
  }
}
