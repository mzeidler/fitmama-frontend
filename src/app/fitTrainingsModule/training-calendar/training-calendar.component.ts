import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Training } from 'src/app/model/training';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { mycolors } from '../../const/mycolors';
import { Subject } from 'rxjs';
import { MonthViewDay } from 'calendar-utils';
import { MatDialog } from '@angular/material';
import { RemoveTrainingDayDialogComponent } from '../remove-training-day-dialog/remove-training-day-dialog.component';
import { AddTrainingDayDialogComponent } from '../add-training-day-dialog/add-training-day-dialog.component';
import { TrainingsService } from 'src/app/services/trainings.service';
import { TrainingDay } from 'src/app/model/trainingday';

@Component({
  selector: 'app-training-calendar',
  templateUrl: './training-calendar.component.html',
  styleUrls: ['./training-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingCalendarComponent implements OnInit {

  refresh: Subject<any> = new Subject(); 
  viewDate: Date = new Date();
  view: string = "month";
  events: CalendarEvent[];
  locale: string = 'hr';
  activeDayIsOpen: boolean = true;

  currentId: string | number;
  currentDay: MonthViewDay;
  currentEvent: CalendarEvent;
  copiedEvent: CalendarEvent;

  private _training: Training;
  
  @Input()
  set training(training: Training) {
    this._training = training;

    this.events = [];
    this._training.trainingDays.forEach(trainingDay => {
      let ev = <CalendarEvent>{};
      ev.title = trainingDay.name;
      ev.color = mycolors.yellow;
      ev.start = this.convertToDate(trainingDay.day);
      ev.id = trainingDay.id;
      this.events.push(ev);
    });
  }
 
  get training(): Training { 
    return this._training; 
  }
  
  set copiedId(id : string | number) {
    this.trainingsService.copiedId = id;
  }

  get copiedId() {
    return this.trainingsService.copiedId;
  }

  constructor(public dialog: MatDialog, private trainingsService: TrainingsService) { }

  ngOnInit() { }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  doubleClick() {
    if (this.currentId) {
      this.editDay()
    } else if (this.currentDay) {
      this.addDay();
    }
  }

  editDay() {
    if (this.currentId) {

      let eventToEdit = this.currentEvent;
      let trainingDayId = this.currentId;

      // TODO: Spinner ? 
      this.trainingsService.getTrainingContent(Number(this.currentId)).subscribe(content => {

        const dialogRef = this.dialog.open(AddTrainingDayDialogComponent, {
          width: '80%', height: '80%', data: { 
            title: 'Uredi trening za dan',
            day: eventToEdit.start,
            name: eventToEdit.title,
            content: content
          }
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {

            let trainingDay = <TrainingDay>{};
            trainingDay.name = result.name;
            trainingDay.id = Number(trainingDayId);

            this.trainingsService.updateTrainingDay(trainingDay);

            eventToEdit.title = result.name;
            this.refresh.next();

            this.trainingsService.setTrainingContent(trainingDay.id, result.content);

          }
        });   

      });

    }
  }

  removeDay() {
    if (this.currentId) {

      let eventToRemove = this.currentEvent;
      let idToRemove = this.currentId;

      const dialogRef = this.dialog.open(RemoveTrainingDayDialogComponent, {
        width: '350px', data: { 
          event: eventToRemove }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.events = this.events.filter(event => event.id != eventToRemove.id);
          this.refresh.next();
          this.trainingsService.removeTrainingDay(Number(idToRemove));
        }
      });   
      
    }
  }

  copyDay() {
    if (this.currentId) {
      this.copiedId = this.currentId;
      this.copiedEvent = this.currentEvent;
    }
  }

  addDay() {
    if (this.currentDay) {

      let dayToAdd = this.currentDay;

      const dialogRef = this.dialog.open(AddTrainingDayDialogComponent, {
        width: '80%', height: '80%', data: { 
          title: 'Dodaj trening za dan',
          day: dayToAdd.date,
          name: '',
          content: ''
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {

          let trainingDay = <TrainingDay>{};
          trainingDay.name = result.name;
          trainingDay.day = this.convertToString(dayToAdd.date);

          this.trainingsService.addTrainingDay(this._training, trainingDay).subscribe(trainingDay => {
            let ev = <CalendarEvent>{};
            ev.title = trainingDay.name;
            ev.color = mycolors.yellow;
            ev.start = this.convertToDate(trainingDay.day);
            ev.id = trainingDay.id;
            this._training.trainingDays.push(trainingDay);
            this.events.push(ev);
            this.refresh.next();

            this.trainingsService.setTrainingContent(trainingDay.id, result.content);

          });
        }
      });   

    }
  }

  pasteDay() {
    if (this.currentDay && this.copiedId) {

      let trainingDay = <TrainingDay>{};
      trainingDay.day = this.convertToString(this.currentDay.date);

      this.trainingsService.copyDay(Number(this.copiedId), trainingDay).subscribe(pastedTrainingDay => {
        let ev = <CalendarEvent>{};
        ev.title = pastedTrainingDay.name;
        ev.color = mycolors.yellow;
        ev.start = this.convertToDate(pastedTrainingDay.day);
        ev.id = pastedTrainingDay.id;
        this._training.trainingDays.push(pastedTrainingDay);
        this.events.push(ev);
        this.refresh.next();
      });

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
