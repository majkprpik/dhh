import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CalendarView } from 'angular-calendar';
import { getMonth, getYear } from 'date-fns';

import { Schedule } from '../../../models/schedule.model';
import * as dhhdashboardActions from '../store/dhhdashboard.actions';
import * as fromDhhdashboard from '../store/dhhdashboard.reducers';
import { Day } from '../../../models/days.model';
import { Shift } from '../../../models/shift.model';



@Component({
  selector: 'ngx-handsontable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss'],
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class HandsontableComponent implements OnInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  dhhdashboardState: Observable<fromDhhdashboard.State>;
  settings;
  dashboard;
  Month;
  dateMatch;
  month= getMonth(this.viewDate) + 1;
  year= getYear(this.viewDate);

  constructor(private store: Store<fromDhhdashboard.FutureState>) {
    this.dhhdashboardState = this.store.select('dhhdashboard');
    // console.log(this.settings);
  }


  ngOnInit() {
    this.dateMatch = false;
    this.getmonth();
    this.month = getMonth(this.viewDate) + 1;
    this.Month.forEach(element => {
      if (this.month === element) {
        this.dateMatch = true;
      }
    });
    this.getSchedule(); // by month and year
      this.settings = {
        data: [
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
            56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
             56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
             56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
             56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
             56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
            56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
             56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
            56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
             56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
          [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25,
            56, 56, 11, 11, 12, 25, 56, 56, 56, 56, 11, 11, 12, 25, 56],
        ],
        colHeaders: this.dashboard ,

        rowHeaders: ['Agent L1', 'Senior L1', 'Senior L1', 'Agent L2', 'Agent L2', 'Agent L2',
            'Agent L2', 'Agent L2', 'Agent L2', 'Agent L2'],

        manualRowMove: true, manualRowResize: true,
        maxRows: 50, maxColumns: 32, rowHeaderWidth: 100, /* stretchH: 'all',*/
        };
  }
  getSchedule(): void {
    this.dhhdashboardState
        .subscribe(data => this.dashboard = data.schedules.map(v => v.month + ' ' + v.days[0].dayOfWeek));
  }
  getmonth(): void {
    this.dhhdashboardState
        .subscribe(data => this.Month = data.schedules.map(v => v.month));
  }
  getRoles(): void {
    this.dhhdashboardState
        .subscribe(heroes => this.dashboard = heroes.schedules.map(v => v.month));
  }
  onAdd() {
    this.store.dispatch(new dhhdashboardActions.AddSchedule(new Schedule('fffsfdfsfs5544sd54f4f', 2 ,
      [new Day('56df5g6g', 15, 'Blagdan', 'UT', [new Shift('f6gdf5g', 'dfg6d5g6', '5g6df5g')])] )));
  }
  monthClicked(): void {
    this.month = getMonth(this.viewDate) + 1;
    // console.log(this.month);
    this.year = getYear(this.viewDate);
    // console.log(this.year);
  }


}
