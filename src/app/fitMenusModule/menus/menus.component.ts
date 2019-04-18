import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/menus.service';
import { Menu } from 'src/app/model/menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menus: Menu[];

  constructor(private menusService: MenusService) { }

  ngOnInit() {
  }

  getMenus(): void {
    this.menusService.getMenus().subscribe(menus => this.menus = menus);
  }

  addMenu(): void {
    let menu = new Menu();
    menu.name = "NEW MENU";
    this.menus.push(menu);
  }

}
