import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CalendarView } from 'angular-calendar';
import { getMonth, getYear} from 'date-fns';

import { Schedule } from '../../../models/schedule.model';
import * as dhhdashboardActions from '../store/dhhdashboard.actions';
import * as ShiftsActions from '../../shifts/store/shifts.actions';
import * as UsersActions from '../../users/store/users.actions';
import { Day } from '../../../models/days.model';
import { Shift } from '../../../models/shift.model';
import { NewShift } from '../../../models/NewShift.model';
import { User } from '../../../models/user.model';


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
  dhhdashboardState: Observable<{ schedules: Schedule[] }>;
  shiftState: Observable<{ shifts: NewShift[] }>;
  usersState: Observable<{ users: User[] }>;
  settings;
  columns;
  shifts;
  Shifts: NewShift[];
  dayShifts: Shift[];
  users;
  dashboard;
  Height= 250;
  Month;
  dateMatch;
  month= getMonth(this.viewDate) + 1;
  year= getYear(this.viewDate);
  date;

  constructor(private store: Store<{ DHHDASHBOARD: { schedules: Schedule[] } }>,
    private store1: Store<{ SHIFTS: { shifts: NewShift[] } }>,
    private store2: Store<{ USERS: { users: User[] } }>) {
    this.store.dispatch(new dhhdashboardActions.FetchSchedule());
    this.dhhdashboardState = this.store.select('DHHDASHBOARD');
    this.store1.dispatch(new ShiftsActions.FetchShift());
    this.shiftState = this.store1.select('SHIFTS');
    this.store2.dispatch(new UsersActions.FetchUsers());
      this.usersState = this.store2.select('USERS');
    // console.log(this.settings);

  }

  ngOnInit() {
    this.dateMatch = false;
    this.getmonth();
    this.month = getMonth(this.viewDate) + 1;
    this.year = getYear(this.viewDate);
    this.date = this.month + '/' + this.year;
    this.Month.forEach(element => {
      if (this.date === element) {
        this.dateMatch = true;
      }
    });
    this.fetchShifts();
    this.getSchedule(); // by month and year
    this.getUsers();
    this.columns = [
      { data: 'start', title: this.dashboard[0], type: 'dropdown', source: this.shifts },
      // data by user/role, day, month, year,
      { data: 'end', title: this.dashboard[1], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[2], title: this.dashboard[2], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[3], title: this.dashboard[3], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[4], title: this.dashboard[4], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[5], title: this.dashboard[5], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[6], title: this.dashboard[6], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[7], title: this.dashboard[7], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[8], title: this.dashboard[8], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[9], title: this.dashboard[9], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[10], title: this.dashboard[10], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[11], title: this.dashboard[11], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[12], title: this.dashboard[12], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[13], title: this.dashboard[13], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[14], title: this.dashboard[14], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[15], title: this.dashboard[15], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[16], title: this.dashboard[16], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[17], title: this.dashboard[17], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[18], title: this.dashboard[18], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[19], title: this.dashboard[19], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[20], title: this.dashboard[20], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[21], title: this.dashboard[21], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[22], title: this.dashboard[22], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[23], title: this.dashboard[23], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[24], title: this.dashboard[24], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[25], title: this.dashboard[25], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[26], title: this.dashboard[26], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[27], title: this.dashboard[27], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[28], title: this.dashboard[28], type: 'dropdown', source: this.shifts },
      { data: this.dashboard[29], title: this.dashboard[29], type: 'dropdown', source: this.shifts},
      { data: this.dashboard[30], title: this.dashboard[30], type: 'dropdown', source: this.shifts},
    ];
      this.settings = {
        colHeaders: this.dashboard ,
        rowHeaders: this.users,
        manualRowMove: true, manualRowResize: true,
        maxRows: 50, maxColumns: 32, rowHeaderWidth: 150, width: 1600,
        height: this.Height,  /* stretchH: 'all',*/
        };
  }
  getSchedule(): void {
    this.dhhdashboardState
        .subscribe(data => this.dashboard = data.schedules[0].days.map(v => v.day + ' ' + v.dayOfWeek));
    this.dhhdashboardState
        .subscribe(data => this.dayShifts = data.schedules.map(v => v.days[0].shifts[0]));
  }
  getmonth(): void {
    this.dhhdashboardState
        .subscribe(data => this.Month = data.schedules.map(v => v.month));
  }
  getUsers(): void {
    this.usersState
        .subscribe(data => this.users = data.users.map(v => v.firstname + ' ' + v.lastname));
  }
  fetchShifts(): void {
    this.shiftState
    .subscribe(data => this.shifts = data.shifts.map(v => v.start + '-' + v.end));
    this.shiftState
    .subscribe(data => this.Shifts = data.shifts);
  }
  onAdd() {
    this.store.dispatch(new dhhdashboardActions.AddSchedule(new Schedule('fffsfdfsfs5544sd54f4f', 2 ,
      [new Day('56df5g6g', 15, 'Blagdan', 'UT', [new Shift('f6gdf5g', 'dfg6d5g6', '5g6df5g')])] )));
  }
  onAddSchedule() {
    this.dateMatch = true;
  }
  monthClicked(): void {
    this.month = getMonth(this.viewDate) + 1;
    // console.log(this.month);
    this.year = getYear(this.viewDate);
    // console.log(this.year);
  }


}
