import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service'
import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['name', 'menus', 'trainings', 'roles'];

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.snapshot.data['usersdetails'];
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  addUser(): void {
    console.log('Dodaj korisnicu');
  }
}
