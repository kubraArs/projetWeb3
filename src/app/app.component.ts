import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarService } from './sidebar-service/sidebar.service'; // Assure-toi de mettre le chemin correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
  showTitle = true;
  sideNavStatus: boolean = false;

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit() {
    // Écoute les changements d'état de la barre latérale
    this.sidebarService.sideNavStatus$.subscribe(status => {
      this.sideNavStatus = status;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showTitle = !event.url.includes('/todo');
      }
    });
  }
}
