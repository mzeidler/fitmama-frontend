import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service'
import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/model/training';
import { Menu } from 'src/app/model/menu';
import { Role } from 'src/app/model/role';
import { MenusService } from 'src/app/services/menus.service';
import { TrainingsService } from 'src/app/services/trainings.service';
import { RolesService } from 'src/app/services/roles.service';
import { MatDialog } from '@angular/material';
import { EditUserMenusDialogComponent } from '../edit-user-menus-dialog/edit-user-menus-dialog.component';
import { EditUserTrainingsDialogComponent } from '../edit-user-trainings-dialog/edit-user-trainings-dialog.component';
import { EditUserRolesDialogComponent } from '../edit-user-roles-dialog/edit-user-roles-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allTrainings: Training[];
  allMenus: Menu[];
  allRoles: Role[];
  users: User[];
  displayedColumns: string[] = ['name', 'menus', 'trainings', 'roles'];

  constructor(public dialog: MatDialog, private usersService: UsersService, private menusService: MenusService, private trainingsService: TrainingsService, private rolesService: RolesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.allMenus = this.route.snapshot.data['menuidlist'].menus;
    this.allTrainings = this.route.snapshot.data['trainingidlist'].trainings;
    this.allRoles = this.route.snapshot.data['roleidlist'].roles;
    this.users = this.route.snapshot.data['users'];
  }

  getUsers(): void {
    this.menusService.getMenuIdList().subscribe(menus => this.allMenus = menus.menus); 
    this.trainingsService.getTrainingIdList().subscribe(trainings => this.allTrainings = trainings.trainings); 
    this.rolesService.getRoleIdList().subscribe(roles => this.allRoles = roles.roles); 
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  addUser(): void {
    console.log('Dodaj korisnicu');
  }

  //******************************************************************** */
  // 1. TRAININGS
  //******************************************************************** */

  editUserTrainings(user: User) {

    if (!user.trainings) {
      user.trainings = [];
    }

    // Populate userTrainings array
    let userTrainings = [...user.trainings];

    // Populate otherTrainings array
    let otherTrainings = [];
    this.allTrainings.forEach(training1 => {
      let found = false;

      user.trainings.forEach(t => {
        if (t.id == training1.id) {
          found = true;
        }
      })

      if (!found) {
        otherTrainings.push(training1);
      }
    });

    // Show Dialog
    const dialogRef = this.dialog.open(EditUserTrainingsDialogComponent, {
      width: '500px', data: { 
        userTrainings: userTrainings,
        otherTrainings: otherTrainings,
        user: user
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        user.trainings = userTrainings.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.usersService.updateTrainings(user).subscribe();
      }

    }); 
  }

  //******************************************************************** */
  // 2. MENUS
  //******************************************************************** */

  editUserMenus(user: User) {

    if (!user.menus) {
      user.menus = [];
    }

    // Populate userMenus array
    let userMenus = [...user.menus];

    // Populate otherMenus array
    let otherMenus = [];
    this.allMenus.forEach(menu1 => {
      let found = false;

      user.menus.forEach(m => {
        if (m.id == menu1.id) {
          found = true;
        }
      })

      if (!found) {
        otherMenus.push(menu1);
      }
    });

    // Show Dialog
    const dialogRef = this.dialog.open(EditUserMenusDialogComponent, {
      width: '500px', data: { 
        userMenus: userMenus,
        otherMenus: otherMenus,
        user: user
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        user.menus = userMenus.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.usersService.updateMenus(user).subscribe();
      }

    }); 
  }

  //******************************************************************** */
  // 3. ROLES
  //******************************************************************** */

  editUserRoles(user: User) {

    if (!user.roles) {
      user.roles = [];
    }

    // Populate userRoles array
    let userRoles = [...user.roles];

    // Populate otherRoles array
    let otherRoles = [];
    this.allRoles.forEach(role1 => {
      let found = false;

      user.roles.forEach(r => {
        if (r.id == role1.id) {
          found = true;
        }
      })

      if (!found) {
        otherRoles.push(role1);
      }
    });

    // Show Dialog
    const dialogRef = this.dialog.open(EditUserRolesDialogComponent, {
      width: '500px', data: { 
        userRoles: userRoles,
        otherRoles: otherRoles,
        user: user
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        user.roles = userRoles.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.usersService.updateRoles(user).subscribe();
      }

    }); 
  }
  
}
