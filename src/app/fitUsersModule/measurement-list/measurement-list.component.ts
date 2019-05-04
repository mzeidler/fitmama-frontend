import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Measurement } from 'src/app/model/measurement';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { MeasurementsDialogComponent } from '../measurements-dialog/measurements-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css']
})
export class MeasurementListComponent implements OnInit {
  
  @Input()
  measurements: Measurement[];

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
            day: moment(this.convertToDate(meas.day))
          }
        });
    
        // Save Dialog Results
        dialogRef.afterClosed().subscribe(result => {
    
          if (result) {
            let measurement = result.meas;
            //measurement.day = this.convertToString(result.day.toDate());
            //this.usersService.addMeasurement(this.user, measurement).subscribe(m => {
            //  this.measurements.push(m);
            //  this.measurements.sort((a,b) => (a.day > b.day) ? -1 : ((b.day > a.day) ? 1 : 0));
            //  this.measurementListComponent.load();
            //});
          }
    
        }); 

  }

  deleteMeasurement(meas: Measurement) {

  }
  

  convertToDate(date: string): Date {
    return new Date(date + "T00:00:00")
  }
}
