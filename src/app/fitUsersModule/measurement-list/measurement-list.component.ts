import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Measurement } from 'src/app/model/measurement';
import { MatPaginator, MatTableDataSource, MatDialog, MatPaginatorIntl } from '@angular/material';
import { MeasurementsDialogComponent } from '../measurements-dialog/measurements-dialog.component';
import * as moment from 'moment';
import { CustomPaginator } from 'src/app/adapters/custompaginator';
import { DeleteMeasurementDialogComponent } from '../delete-measurement-dialog/delete-measurement-dialog.component';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css'],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginator
    }
  ]
})
export class MeasurementListComponent implements OnInit {
  
  @Input()
  measurements: Measurement[];

  @Output() 
  deleteRequest = new EventEmitter<Measurement>();

  @Output() 
  updateRequest = new EventEmitter<Measurement>();

  displayedColumns: string[] = [ 'day', 'value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8', 'buttons'];
  dataSource = new MatTableDataSource<Measurement>(this.measurements);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.load();
  }

  public load() {
    if (this.measurements) {
      this.measurements.sort((a,b) => (a.day > b.day) ? -1 : ((b.day > a.day) ? 1 : 0));
    }
    this.dataSource = new MatTableDataSource<Measurement>(this.measurements);
    this.dataSource.paginator = this.paginator;
  }

  editMeasurement(meas: Measurement) {

        // Show Dialog
        const dialogRef = this.dialog.open(MeasurementsDialogComponent, {
          width: '700px', data: { 
            meas: {...meas},
            day: moment(this.convertToDate(meas.day)),
            canUpdateDay: false
          }
        });
    
        // Save Dialog Results
        dialogRef.afterClosed().subscribe(result => {
    
          if (result) {
            meas.day = result.meas.day;
            meas.value1 = result.meas.value1;
            meas.value2 = result.meas.value2;
            meas.value3 = result.meas.value3;
            meas.value4 = result.meas.value4;
            meas.value5 = result.meas.value5;
            meas.value6 = result.meas.value6;
            meas.value7 = result.meas.value7;
            meas.value8 = result.meas.value8;
            this.updateRequest.emit(meas);

          }
    
        }); 

  }

  deleteMeasurement(meas: Measurement) {

    const dialogRef = this.dialog.open(DeleteMeasurementDialogComponent, {
      width: '430px', data: { 
        title: 'Obriši mjerenje'
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.deleteRequest.emit(meas);  
      }

    }); 

  }
  

  convertToDate(date: string): Date {
    return new Date(date + "T00:00:00")
  }
}
