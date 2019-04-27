import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { mycolors } from '../../const/mycolors';
import { Subject } from 'rxjs';
import { MonthViewDay } from 'calendar-utils';

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

  private _menu: Menu;
  
  @Input()
  set menu(menu: Menu) {
    this._menu = menu;

    this.events = [];
    this._menu.menuDays.forEach(menuDay => {
      let ev = <CalendarEvent>{};
      ev.title = menuDay.name;
      ev.color = mycolors.yellow;
      ev.start = new Date(menuDay.day);
      ev.id = menuDay.id;
      this.events.push(ev);
    });
  }
 
  get menu(): Menu { 
    return this._menu; 
  }
  
  constructor() { }

  ngOnInit() { }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  doubleClick() {

    if (this.currentId) {
      console.log("Edit " + this.currentId);
    } else if (this.currentDay) {
      console.log("Add Day on " + this.currentDay.date.getDate() + "." + (this.currentDay.date.getMonth() + 1) + "." + this.currentDay.date.getFullYear());
    }
  
  }

  editDay() {
    if (this.currentId) {
      console.log("Edit " + this.currentId);
    }
  }

  removeDay() {
    if (this.currentId) {
      console.log("Remove " + this.currentId);
    }
  }

  copyDay() {
    if (this.currentId) {
      console.log("Copy " + this.currentId);
    }
  }

  addDay() {
    if (this.currentDay) {
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

    return currentEvent;
  }
}
