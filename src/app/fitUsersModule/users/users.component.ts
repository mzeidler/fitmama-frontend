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
import { EditUserDetailsDialogComponent } from '../edit-user-details-dialog/edit-user-details-dialog.component';

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

  load(user: User) {

    this.usersService.getMeasurements(user).subscribe(m => {
      user.measurements = m;
    });

  }

  //******************************************************************** */
  // ADD USER
  //******************************************************************** */

  addUser(): void {
    let user = <User>{};
    user.menus = [];
    user.roles = [];
    user.trainings = [];
    user.gender = 'F';
    
    // Show Dialog
    const dialogRef = this.dialog.open(EditUserDetailsDialogComponent, {
      width: '650px', data: { 
        add: true,
        myfit: false,
        user: {...user},
      }
    });


    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {
    
      if (result) {
        this.usersService.updateUser(result.user).subscribe(u => {
          this.users.push(u);
        }); 
      }
    
    });   

  }

  updateUser(user: User) {
    this.usersService.updateUser(user).subscribe(); 
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user);
    this.users = this.users.filter(u => u.id != user.id);    
  }

  editUserTrainings(user: User) {
    this.usersService.updateTrainings(user).subscribe();
  }

  editUserMenus(user: User) {
    this.usersService.updateMenus(user).subscribe();
  }

  editUserRoles(user: User) {
    this.usersService.updateRoles(user).subscribe();
  }
  
}
