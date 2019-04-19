import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { Users } from '../model/users';

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

  getUsersShort(): Observable<Users> {
    return this.http.get<Users>(`${this.usersUrl}/short`).pipe(
      catchError(this.handleError<Users>('getUsersShort'))
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

}
