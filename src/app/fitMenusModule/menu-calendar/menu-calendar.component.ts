import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { mycolors } from '../../const/mycolors';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu-calendar',
  templateUrl: './menu-calendar.component.html',
  styleUrls: ['./menu-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCalendarComponent implements OnInit {

  refresh: Subject<any> = new Subject(); 
  viewDate: Date = new Date();
  events: CalendarEvent[];
  locale: string = 'hr';

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
      this.events.push(ev);
    });
  }
 
  get menu(): Menu { 
    return this._menu; 
  }
  
  constructor() { }

  ngOnInit() { }

}
