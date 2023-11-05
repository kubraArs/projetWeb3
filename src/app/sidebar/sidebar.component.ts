import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
@Input() sideNavStatus: boolean=false;
  list =[
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'to-do list',
      icon: 'fas fa-list',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
