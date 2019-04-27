import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';
import { Menu } from '../model/menu';
import { MenuDay } from '../model/menuday';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private menusUrl = `//${environment.resturl}:9001/api/menus`;

  private menuDayUrl = `//${environment.resturl}:9001/api/menuday`;

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

  updateUsers(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.menusUrl + "/updateusers", menu, httpOptions).pipe(
      catchError(this.handleError<Menu>('updateMenuUsers'))
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



  addMenuDay(menu: Menu, menuDay: MenuDay): Observable<MenuDay> {
    return this.http.post<MenuDay>(this.menusUrl + "/" + menu.id + "/addday", menuDay, httpOptions).pipe(
      catchError(this.handleError<MenuDay>('addMenuDay'))
    );
  }

  removeMenuDay(menuDayId: number) {
    return this.http.post(this.menusUrl + "/removeday/" + menuDayId, httpOptions).subscribe();
  }

  getMenuContent(menuDayId: number): Observable<string> {
	  //@GetMapping("/api/menuday/content/{menuDayId}")
    //public String getContent(@PathVariable Long menuDayId)
    
    return this.http.post<string>(this.menuDayUrl + "/content/" + menuDayId, httpOptions).pipe(
      catchError(this.handleError<string>('getMenuContent'))
    );

  }

  setMenuContent(menuDayId: number, content: string) {
    return this.http.post(this.menuDayUrl + "/content/" + menuDayId, content, httpOptions).subscribe();
  }
}
