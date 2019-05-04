import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Measurement } from 'src/app/model/measurement';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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

  constructor() { }

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

  }

  deleteMeasurement(meas: Measurement) {

  }
  
}
