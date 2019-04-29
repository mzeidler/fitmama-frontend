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

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  trainings: Training[];
  menus: Menu[];
  roles: Role[];
  users: User[];
  displayedColumns: string[] = ['name', 'menus', 'trainings', 'roles'];

  constructor(private usersService: UsersService, private menusService: MenusService, private trainingsService: TrainingsService, private rolesService: RolesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menus = this.route.snapshot.data['menuidlist'].menus;
    this.trainings = this.route.snapshot.data['trainingidlist'].trainings;
    this.roles = this.route.snapshot.data['roleidlist'].roles;
    this.users = this.route.snapshot.data['users'];
  }

  getUsers(): void {
    this.menusService.getMenuIdList().subscribe(menus => this.menus = menus.menus); 
    this.trainingsService.getTrainingIdList().subscribe(trainings => this.trainings = trainings.trainings); 
    this.rolesService.getRoleIdList().subscribe(roles => this.roles = roles.roles); 
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  addUser(): void {
    console.log('Dodaj korisnicu');
  }

  editUserTrainings(user: User) {
    console.log('Dodaj trening korisniku ' + user.name);
  }

  editUserMenus(user: User) {
    console.log('Dodaj meni korisniku ' + user.name);
  }

  editUserRoles(user: User) {
    console.log('Dodaj ulogu korisniku ' + user.name);
  }
  
}
