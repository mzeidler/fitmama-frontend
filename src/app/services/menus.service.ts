import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';
import { Menu } from '../model/menu';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private menusUrl = `//${environment.resturl}:9001/api/menus`;

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menusUrl).pipe(
      catchError(this.handleError('geMenus', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
