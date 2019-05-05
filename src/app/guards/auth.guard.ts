import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {

            let hasRole = false;
            if (route.data && route.data.roles) {
                route.data.roles.forEach(routeRole => {
                    currentUser.roles.forEach(userRole => {
                        if (!hasRole && (routeRole == userRole.role)) {
                            hasRole = true;
                        }
                    });
                });
            }

            if (!hasRole) {
                this.router.navigate(['/']);
                return false;
            }

            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}