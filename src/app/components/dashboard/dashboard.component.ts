import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  category: string;
  expiration: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Java 101', category: 'Programming', expiration: '01/02/2019'},
  {position: 2, name: 'How to Make Money', category: 'Other', expiration: '01/12/2019'},
  {position: 3, name: 'How to Build a Website', category: 'Programming', expiration: '11/02/2019'},
  {position: 4, name: 'In It to Win It', category: 'Other', expiration: '01/04/2019'},
  {position: 5, name: 'Basic Chemicals', category: 'Chemistry', expiration: '01/06/2019'},
  {position: 6, name: 'How to Take Portraits', category: 'Photography', expiration: '03/02/2019'},
  {position: 7, name: 'How to Draw Animals', category: 'Art', expiration: '05/03/2019'},
  {position: 8, name: 'Trickle Down Theory', category: 'Other', expiration: '06/11/2019'},
  {position: 9, name: 'Rich get Richer', category: 'Other', expiration: '01/02/2019'},
  {position: 10, name: 'Learn Music', category: 'Music', expiration: '01/02/2019'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['position', 'name', 'category', 'expiration'];
  dataSource                 = new MatTableDataSource(ELEMENT_DATA);

  constructor() {
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
