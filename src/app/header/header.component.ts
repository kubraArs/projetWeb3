import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menueStatus: boolean= false;

  constructor() {}

  ngOnInit(): void {
    
  }

  SideNavToggle(){
    this.menueStatus= !this.menueStatus;

    this.sideNavToggled.emit(this.menueStatus);

  }



}
