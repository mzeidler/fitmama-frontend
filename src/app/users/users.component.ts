import { Component, OnInit } from '@angular/core';
import { UsersService} from '../services/users.service'
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'birthDate'];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    //this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

}
