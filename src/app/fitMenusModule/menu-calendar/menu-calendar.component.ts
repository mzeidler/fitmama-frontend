import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { mycolors } from '../../const/mycolors';
import { Subject } from 'rxjs';
import { MonthViewDay } from 'calendar-utils';
import { MatDialog } from '@angular/material';
import { RemoveMenuDayDialogComponent } from '../remove-menu-day-dialog/remove-menu-day-dialog.component';
import { AddMenuDayDialogComponent } from '../add-menu-day-dialog/add-menu-day-dialog.component';
import { MenusService } from 'src/app/services/menus.service';
import { MenuDay } from 'src/app/model/menuday';


@Component({
  selector: 'app-menu-calendar',
  templateUrl: './menu-calendar.component.html',
  styleUrls: ['./menu-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCalendarComponent implements OnInit {

  refresh: Subject<any> = new Subject(); 
  viewDate: Date = new Date();
  view: string = "month";
  events: CalendarEvent[];
  locale: string = 'hr';
  activeDayIsOpen: boolean = true;

  currentId: string | number;
  currentDay: MonthViewDay;
  currentEvent: CalendarEvent;

  private _menu: Menu;
  
  @Input()
  set menu(menu: Menu) {
    this._menu = menu;

    this.events = [];
    this._menu.menuDays.forEach(menuDay => {
      let ev = <CalendarEvent>{};
      ev.title = menuDay.name;
      ev.color = mycolors.yellow;
      ev.start = this.convertToDate(menuDay.day);
      ev.id = menuDay.id;
      this.events.push(ev);
    });
  }
 
  get menu(): Menu { 
    return this._menu; 
  }
  
  constructor(public dialog: MatDialog, private menusService: MenusService) { }

  ngOnInit() { }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  doubleClick() {

    if (this.currentId) {
      console.log("Edit " + this.currentId);
    } else if (this.currentDay) {
      this.addDay();
    }
  
  }

  editDay() {
    if (this.currentId) {
      console.log("Edit " + this.currentId);
    }
  }

  removeDay() {
    if (this.currentId) {

      let eventToRemove = this.currentEvent;

      const dialogRef = this.dialog.open(RemoveMenuDayDialogComponent, {
        width: '350px', data: { 
          event: eventToRemove }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log("Remove " + eventToRemove.title);
          this.events = this.events.filter(event => event.id != eventToRemove.id);
          // TODO: REMOVE FROM BACKEND
        }
      });   
      
    }
  }

  copyDay() {
    if (this.currentId) {
      console.log("Copy " + this.currentId);
    }
  }

  addDay() {
    if (this.currentDay) {

      let dayToAdd = this.currentDay;

      const dialogRef = this.dialog.open(AddMenuDayDialogComponent, {
        width: '350px', data: { 
          title: 'Dodaj meni za dan',
          day: dayToAdd.date,
          name: undefined,
          content: undefined
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

          let menuDay = <MenuDay>{};
          menuDay.name = result.name;
          menuDay.day = this.convertToString(dayToAdd.date);

          this.menusService.addMenuDay(this._menu, menuDay).subscribe(menuDay => {
            let ev = <CalendarEvent>{};
            ev.title = menuDay.name;
            ev.color = mycolors.yellow;
            ev.start = this.convertToDate(menuDay.day);
            ev.id = menuDay.id;
            this._menu.menuDays.push(menuDay);
            this.events.push(ev);
            this.refresh.next();

            this.menusService.setMenuContent(menuDay.id, result.content);

          });
        }
      });   

      console.log("Add Day on " + this.currentDay.date.getDate() + "." + (this.currentDay.date.getMonth() + 1) + "." + this.currentDay.date.getFullYear());
    }
  }

  pasteDay() {
    if (this.currentDay) {
      console.log("Paste Day on " + this.currentDay.date.getDate() + "." + (this.currentDay.date.getMonth() + 1) + "." + this.currentDay.date.getFullYear());
    }   
  }

  enterDay(day: MonthViewDay) {
    this.currentDay = day;
    let ev: CalendarEvent = this.findEvent(day);
    if(ev) {
      this.currentId = ev.id;
    } else {
      this.currentId = undefined;
    }
  }

  leaveDay(day: MonthViewDay) {
    this.currentDay = undefined;
    this.currentId = undefined;
    this.currentEvent = undefined;
  }  

  findEvent(day: MonthViewDay): CalendarEvent {
    let currentEvent: CalendarEvent = undefined;
    this.events.forEach(event => {
      if (event.start.getFullYear() == day.date.getFullYear() && 
          event.start.getMonth() == day.date.getMonth() && 
          event.start.getDate() == day.date.getDate()) {    
            currentEvent = event;
      }      
    });

    this.currentEvent = currentEvent;
    return currentEvent;
  }

  convertToString(date: Date): string {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return  year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
  }

  convertToDate(date: string): Date {
    return new Date(date + "T00:00:00")
  }
}
