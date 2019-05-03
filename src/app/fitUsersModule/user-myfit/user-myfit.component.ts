import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { EditUserDetailsDialogComponent } from '../edit-user-details-dialog/edit-user-details-dialog.component';
import { MenusService } from 'src/app/services/menus.service';
import { TrainingsService } from 'src/app/services/trainings.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { MeasurementsDialogComponent } from '../measurements-dialog/measurements-dialog.component';
import { Measurement } from 'src/app/model/measurement';
import * as moment from 'moment';

@Component({
  selector: 'app-user-myfit',
  templateUrl: './user-myfit.component.html',
  styleUrls: ['./user-myfit.component.css']
})
export class UserMyfitComponent implements OnInit {

  public Editor = DecoupledEditor;

  @Input()
  user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location,
    public dialog: MatDialog,
    private menusService: MenusService,
    private trainingsService: TrainingsService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe(user => { 

      this.user = user;

      // LOAD CURRENT MENUS
      let now = new Date();
      let day = this.convertToString(now);

      this.user.menus.forEach(m => {
        this.menusService.getDayContent(m.id, day).subscribe(dayContent => {
          if (dayContent) {
            m.currentContent = dayContent.content;
            m.currentName = dayContent.name;
          } else {
            m.currentContent = "Za danas nije zadan Meni";
          }
        });
      });

      // LOAD CURRENT TRAINIGS
      this.user.trainings.forEach(t => {
        this.trainingsService.getDayContent(t.id, day).subscribe(dayContent => {
          if (dayContent) {
            t.currentContent = dayContent.content;
            t.currentName = dayContent.name;
          } else {
            t.currentContent = "Za danas nije zadan Trening";
          }
        });
      });
      
      // LOAD MEASUREMENTS
    });
  }

  goBack(): void {
    this.location.back();
  }

  editUser() {
    // Show Dialog
    const dialogRef = this.dialog.open(EditUserDetailsDialogComponent, {
      width: '650px', data: { 
        add: false,
        myfit: true,
        user: {...this.user},
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.user.username = result.user.username;
        this.user.firstName = result.user.firstName;
        this.user.lastName = result.user.lastName;
        this.user.gender = result.user.gender;
        this.user.address = result.user.address;
        this.user.city = result.user.city;
        this.user.zipcode = result.user.zipcode;
        this.user.mobile = result.user.mobile;
        this.user.email = result.user.email;
        this.user.birthDate = result.user.birthDate;
        this.user.height = result.user.height;                    
        this.user.name = this.getName(this.user);
        this.usersService.updateUser(this.user).subscribe(); 
      }

    }); 
  }

  addMeasurement() {

    // Show Dialog
    const dialogRef = this.dialog.open(MeasurementsDialogComponent, {
      width: '700px', data: { 
        meas: <Measurement>{},
        day: moment(new Date())
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        let measurement = result.meas;
        measurement.day = this.convertToString(result.day.toDate());
        this.usersService.addMeasurement(this.user, measurement).subscribe();
      }

    }); 
  }

  public getName(user: User): string {

    let name = '';

    if (user.firstName) {
      name = user.firstName + " ";
    }

    if (user.lastName) {
      name = name + user.lastName;
    }

    if (name.length == 0 && user.username) {
      name = user.username;
    }

    if (name.length == 0) {
      name = "User id=" + user.id;
    }

    return name;
  }

  convertToString(date: Date): string {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return  year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
  }

  public onReady(editor) {

    editor.isReadOnly = true;
    editor.editing.view.change( writer => {
      writer.setAttribute( 'spellcheck', 'false', editor.editing.view.document.getRoot() );
    } );

    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );

  }
}
