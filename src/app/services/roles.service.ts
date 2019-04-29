import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { RoleIdList } from '../model/roleidlist';
import { catchError, map, tap } from 'rxjs/operators';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private rolesUrl = `//${environment.resturl}:9001/api/roles`;

  constructor(private http: HttpClient) { }

  getRoleIdList(): Observable<RoleIdList> {
    return this.http.get<RoleIdList>(`${this.rolesUrl}/short`).pipe(
      catchError(this.handleError<RoleIdList>('getRoleIdList'))
    );
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl).pipe(
      catchError(this.handleError('getRoles', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
