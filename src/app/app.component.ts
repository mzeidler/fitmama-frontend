import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    let isAdmin = false;
    if (this.currentUser && this.currentUser.roles) {
      this.currentUser.roles.forEach(role => {
        if (role.role == 'ADMIN') {
          isAdmin = true;
        }
      });
    }
    return isAdmin;
  }

  get isUser() {
    let isUser = false;
    if (this.currentUser && this.currentUser.roles) {
      this.currentUser.roles.forEach(role => {
        if (role.role == 'USER') {
          isUser = true;
        }
      });
    }
    return isUser;
  }

  get isExerciseAdmin() {
    let isExerciseAdmin = false;
    if (this.currentUser && this.currentUser.roles) {
      this.currentUser.roles.forEach(role => {
        if (role.role == 'EXERCISE_ADMIN') {
          isExerciseAdmin = true;
        }
      });
    }
    return isExerciseAdmin;
  }

  get isMenuAdmin() {
    let isMenuAdmin = false;
    if (this.currentUser && this.currentUser.roles) {
      this.currentUser.roles.forEach(role => {
        if (role.role == 'MENU_ADMIN') {
          isMenuAdmin = true;
        }
      });
    }
    return isMenuAdmin;
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
