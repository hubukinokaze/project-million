import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private subscriptions: Array<any> = [];

  constructor(
    private aroute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(this.aroute.params.subscribe((params) => {
      console.log(params.id);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    });
  }

}
