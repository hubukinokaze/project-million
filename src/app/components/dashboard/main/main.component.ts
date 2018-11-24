import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DateUtilityService } from '../../../services/date-utility/date-utility.service';

export interface PeriodicElement {
  name: string;
  id: number;
  category: string;
  expiration: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Java 101', category: 'Programming', expiration: 1553026891},
  {id: 2, name: 'How to Make Money', category: 'Other', expiration: 1540026891},
  {id: 3, name: 'How to Build a Website', category: 'Programming', expiration: 1543126891},
  {id: 4, name: 'In It to Win It', category: 'Other', expiration: 1543027891},
  {id: 5, name: 'Basic Chemicals', category: 'Chemistry', expiration: 1544026891},
  {id: 6, name: 'How to Take Portraits', category: 'Photography', expiration: 1544026891},
  {id: 7, name: 'How to Draw Animals', category: 'Art', expiration: 1543326891},
  {id: 8, name: 'Trickle Down Theory', category: 'Other', expiration: 1543426891},
  {id: 9, name: 'Rich get Richer', category: 'Other', expiration: 1543626891},
  {id: 10, name: 'Learn Music', category: 'Music', expiration: 1543626891},
  {id: 11, name: 'Putting Together Wood', category: 'Craft', expiration: 1543116891},
  {id: 12, name: 'Making Decorations', category: 'Craft', expiration: 1543446891},
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'category', 'expiration'];
  dataSource                 = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private router: Router,
    private dateUtil: DateUtilityService
  ) {
    this.dateUtil.timeLeft(new Date(1543026891 * 1000));
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  public selectRow(row) {
    this.router.navigate(['dashboard/overview', row.id]).then((e) => {
      if (e) {
        console.log(e);
      } else {
        console.log('fail');
      }
    });
  }

  public getTimeLeft(date: number) {
    return this.dateUtil.timeLeft(new Date(date * 1000));
  }
}
