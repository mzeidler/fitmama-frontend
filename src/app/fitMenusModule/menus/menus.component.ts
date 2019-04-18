import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/menus.service';
import { Menu } from 'src/app/model/menu';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddMenuDialogComponent } from '../add-menu-dialog/add-menu-dialog.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menus: Menu[];
  name: string;

  constructor(private menusService: MenusService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  getMenus(): void {
    this.menusService.getMenus().subscribe(menus => this.menus = menus);
  }

  addMenu(): void {
    this.name = undefined;

    const dialogRef = this.dialog.open(AddMenuDialogComponent, {
      width: '350px', data: { 
        title: 'Dodavanje novog menija', 
        placeholder: 'Ime',
        name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;

      if (this.name) {
        let menu = new Menu();
        menu.name = this.name;
        this.menus.push(menu);
      }
    });

  }
}
