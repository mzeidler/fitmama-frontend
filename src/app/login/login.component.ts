import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({ 
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    
    username: string;
    password: string;
    loading = false;
    returnUrl: string;

    constructor(
        private snackBar: MatSnackBar,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/home']);
        }
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.username, this.password).subscribe(hasAuthenticated => {
            if (hasAuthenticated) {
                this.router.navigate([this.returnUrl]);
            } else {
                this.snackBar.open("prijava nije bila uspješna",undefined, {
                    duration: 2000
                });                    
                this.loading = false;
            }
        });
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

}