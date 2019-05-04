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

  displayedColumns: string[] = [ 'day', 'value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8'];
  dataSource = new MatTableDataSource<Measurement>(this.measurements);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    
    this.dataSource = new MatTableDataSource<Measurement>(this.measurements);
    this.dataSource.paginator = this.paginator;
  }

  load() {
    this.dataSource = new MatTableDataSource<Measurement>(this.measurements);
    this.dataSource.paginator = this.paginator;
  }
}
