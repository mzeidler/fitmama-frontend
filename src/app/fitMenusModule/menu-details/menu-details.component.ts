import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/model/menu';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  @Input()
  menu: Menu;

  constructor() { }

  ngOnInit() {
  }

}
