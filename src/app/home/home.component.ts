import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
    
    currentUser: User;
    userFromApi: User;

    constructor(
        private usersService: UsersService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.usersService.getUser(this.currentUser.id).pipe(first()).subscribe(user => { 
            this.userFromApi = user;
        });
    }
}