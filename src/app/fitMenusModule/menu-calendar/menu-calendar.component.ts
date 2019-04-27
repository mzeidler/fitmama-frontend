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

  doubleClick(day: MonthViewDay) {
    let ev: CalendarEvent = this.findEvent(day);
    if (ev) {
      console.log("doubleclick event: , id=" + ev.id + ", title=" + ev.title);
    } else {
      console.log("Add new event at " + day);
    }    
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

  enterDay(day: MonthViewDay) {
    this.currentDay = day;
    let ev: CalendarEvent = this.findEvent(day);
    if(ev) {
      this.currentId = ev.id;
    }
  }

  leaveDay(day: MonthViewDay) {
    this.currentDay = undefined;
    this.currentId = undefined;
  }  
}
