import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';
import { Menu } from '../model/menu';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private menusUrl = `//${environment.resturl}:9001/api/menus`;

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menusUrl).pipe(
      catchError(this.handleError('getMenus', []))
    );
  }

  addMenu (menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.menusUrl + "/add", menu, httpOptions).pipe(
      catchError(this.handleError<Menu>('addMenu'))
    );
  }

  updateMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.menusUrl + "/update", menu, httpOptions).pipe(
      catchError(this.handleError<Menu>('updateMenu'))
    );
  }

  deleteMenu(menu: Menu) {
    return this.http.delete(this.menusUrl + "/delete/" + menu.id, httpOptions).subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
