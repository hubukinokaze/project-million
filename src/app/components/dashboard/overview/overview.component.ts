import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private subscriptions: Array<any> = [];
  public isPurchased: boolean;
  public buyBtnLabel: string;

  constructor(
    private aroute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(this.aroute.params.subscribe((params) => {
      console.log(params.id);
    }));

    this.setupVars();
    this.checkIsPurchased();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    });
  }

  private setupVars() {
    this.buyBtnLabel = 'Buy';
  }

  private checkIsPurchased() {
    // TODO: make call to see if purchased
    if (Math.floor(Math.random() * 2) === 1) {
      this.isPurchased = true;
      this.buyBtnLabel = 'Purchased';
    } else {
      this.isPurchased = false;
    }
  }
}
