import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateUtilityService {
  private today: Moment;

  constructor() {
    this.today = moment(new Date());
  }

  public getToday(...format: Array<string>): moment {
    if (format.length === 1) {
      return this.today.format(format[0]);
    }
    return this.today;
  }

  public isExpired(date: Date): boolean {
    const temp = moment(date);
    if (moment.duration(temp.diff(this.today)).as('hours') < 0) {
      return true;
    }
    return false;
  }

  public timeLeft(date: Date): string {
    const temp = moment(date);
    const left = moment.duration(temp.diff(this.today)).humanize(true);
    if (left.endsWith('ago')) {
      return 'Expired';
    }
    return left;
  }
}
