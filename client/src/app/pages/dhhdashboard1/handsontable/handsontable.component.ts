import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CalendarView } from 'angular-calendar';

import { Schedule } from '../../../models/schedule.model';
import * as dhhdashboardActions from '../store/dhhdashboard.actions';



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

  dhhdashboardState: Observable<{schedules: Schedule[]}>;
  settings;
  dashboard;

  constructor(private store: Store<{dhhdashborad: {schedules: Schedule[]}}>) {
    this.dhhdashboardState = this.store.select('dhhdashboard');
    // console.log(this.settings);
  }


  ngOnInit() {
    this.getRoles();
    this.settings = {
      data: [
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
        [11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56, 11, 11, 12, 25, 56, 56],
      ],
      colHeaders: [1., 2., 3., 4., 5., 6., 1., 2., 3., 4., 5., 6., 1., 2., 3., 4., 5., 6., 1., 2., 3., 4., 5., 6.],

      rowHeaders: this.dashboard,

      manualColumnResize: true, manualRowMove: true, manualRowResize: true,
      maxRows: 50, maxColumns: 35, rowHeaderWidth: 100, stretchH: 'all',
    };
  }
  getRoles(): void {
    this.dhhdashboardState
        .subscribe(heroes => this.dashboard = heroes.schedules.map(v => v.name));
  }
  onAdd() {
    this.store.dispatch(new dhhdashboardActions.AddSchedule(new Schedule('dsfsd', 6)));
  }
}
