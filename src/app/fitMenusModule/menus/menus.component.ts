import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/menus.service';
import { Menu } from 'src/app/model/menu';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddMenuDialogComponent } from '../add-menu-dialog/add-menu-dialog.component';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menus: Menu[];
  users: User[];
  name: string;

  constructor(private menusService: MenusService, private userService: UsersService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.snapshot.data['useridlist'].users;
    this.menus = this.route.snapshot.data['menus'];
  }

  getMenus(): void {
    this.userService.getUserIdList().subscribe(users => this.users = users.users);
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
        let newMenu = new Menu();
        newMenu.name = this.name;
        newMenu.menuDays = [];
        newMenu.users = [];

        this.menusService.addMenu(newMenu)
        .subscribe(menu => {
          this.menus.push(menu);
        });
      }
    });
  }

  updateMenu(menu: Menu) {
      this.menusService.updateMenu(menu).subscribe();
  }
  
  deleteMenu(menu: Menu) {
      this.menusService.deleteMenu(menu);
      this.menus = this.menus.filter(m => m.id != menu.id);
  }

  updateMenuUsers(menu: Menu) {
    this.menusService.updateUsers(menu).subscribe();
  }

}
