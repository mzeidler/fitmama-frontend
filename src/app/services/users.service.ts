import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { UserIdList } from '../model/useridlist';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = `//${environment.resturl}:9001/api/users`;
  private userUrl = `//${environment.resturl}:9001/api/user`;

  constructor(private http: HttpClient) { 

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError('getUsers', []))
    );
  }

  getUserIdList(): Observable<UserIdList> {
    return this.http.get<UserIdList>(`${this.usersUrl}/short`).pipe(
      catchError(this.handleError<UserIdList>('getUserIdList'))
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  updateTrainings(user: User): Observable<User> {
    // TODO: Implement in backend
    return this.http.post<User>(this.usersUrl + "/updatetrainings", user, httpOptions).pipe(
      catchError(this.handleError<User>('updateTrainings'))
    );
  }

  updateMenus(user: User): Observable<User> {
    // TODO: Implement in backend
    return this.http.post<User>(this.usersUrl + "/updatemenus", user, httpOptions).pipe(
      catchError(this.handleError<User>('updateMenus'))
    );
  }

  updateRoles(user: User): Observable<User> {
    // TODO: Implement in backend
    return this.http.post<User>(this.usersUrl + "/updateroles", user, httpOptions).pipe(
      catchError(this.handleError<User>('updateRoles'))
    );
  }
}
