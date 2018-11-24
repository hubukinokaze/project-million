import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateUtilityService {
  private today: moment.Moment;

  constructor() {
    this.today = moment(new Date());
  }

  public getToday(...format: Array<string>): string {
    if (format.length === 1) {
      return this.today.format(format[0]);
    }
    return this.today.toISOString();
  }

  public isExpired(date: Date): boolean {
    const temp = moment(date);
    if (moment.duration(temp.diff(this.today)).asDays() < 0) {
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
