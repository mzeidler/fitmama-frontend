import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../environments/environment';
import { Menu } from '../model/menu';
import { MenuDay } from '../model/menuday';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuIdList } from '../model/menuidlist';
import { DayContent } from '../model/daycontent';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const textOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'Accept':'text/plain' }),
  'responseType': 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  public copiedId: number | string;
  
  private menusUrl = `//${environment.resturl}:9001/api/menus`;

  private menuDayUrl = `//${environment.resturl}:9001/api/menuday`;

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menusUrl).pipe(
      catchError(this.handleError('getMenus', []))
    );
  }

  getMenuIdList(): Observable<MenuIdList> {
    return this.http.get<MenuIdList>(`${this.menusUrl}/short`).pipe(
      catchError(this.handleError<MenuIdList>('getMenuIdList'))
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

  updateMenuDay(menuDay: MenuDay) {
    return this.http.post<MenuDay>(this.menusUrl + "/updateday", menuDay, httpOptions).subscribe();
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
    return this.http.get<string>(this.menuDayUrl + "/content/" + menuDayId, textOptions).pipe(
      catchError(this.handleError<string>('getMenuContent'))
    );
  }

  setMenuContent(menuDayId: number, content: string) {
    return this.http.post(this.menuDayUrl + "/content/" + menuDayId, content, textOptions).subscribe();
  }

  copyDay(menuDayId: number, menuDay: MenuDay): Observable<MenuDay> {
    return this.http.post<MenuDay>(this.menusUrl + "/copyday/" + menuDayId, menuDay, httpOptions).pipe(
      catchError(this.handleError<MenuDay>('copyDay'))
    );
  }

  getDayContent(menuId: number, day: string): Observable<DayContent> {
    return this.http.get<DayContent>(this.menusUrl + "/content/" + menuId + "/" + day, httpOptions).pipe(
      catchError(this.handleError<DayContent>('getDayContent'))
    );    
  }
}
