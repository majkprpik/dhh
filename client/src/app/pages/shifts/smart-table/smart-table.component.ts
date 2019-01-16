import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Store } from '@ngrx/store';
import { NewShift } from '../../../models/NewShift.model';
import * as ShiftsActions from '../store/shifts.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {
  shiftState: Observable<{ shifts: NewShift[] }>;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Shift name',
        type: 'string',
      },
      start: {
        title: 'Start',
        type: 'number',
      },
      end: {
        title: 'End',
        type: 'number',
      },
      priority: {
        title: 'Priority',
        type: 'boolean',
        editor: {
          type: 'checkbox',
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
/*
    constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
    }

*/
  constructor(private store: Store<{ SHIFTS: { shifts: NewShift[] } }>) {
      this.store.dispatch(new ShiftsActions.FetchShift());
      this.shiftState = this.store.select('SHIFTS');
      this.store.select('SHIFTS').subscribe(value => {
      const data = value.shifts;
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    alert(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.store.dispatch(new ShiftsActions.DeleteShift(event.data));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.store.dispatch(new ShiftsActions.UpdateShift(event.newData));
    event.confirm.resolve();
  }
  onCreateConfirm(event): void {
    this.store.dispatch(new ShiftsActions.AddShift(event.newData));
    event.confirm.resolve();
  }
}
