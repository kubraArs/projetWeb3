import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarService } from '../../service/sidebar-service/sidebar.service'; // Assure-toi que le chemin est correct

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menueStatus: boolean = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  SideNavToggle() {
    this.menueStatus = !this.menueStatus;

    // Utilise le service SidebarService pour effectuer le basculement d'état
    this.sidebarService.setSideNavStatus(this.menueStatus);

    this.sideNavToggled.emit(this.menueStatus);
  }
}
