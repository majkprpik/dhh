import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Store } from '@ngrx/store';
import { NewShift } from '../../../models/NewShift.model';
import * as ShiftsActions from '../store/shifts.actions';
import { Observable } from 'rxjs/Observable';
import { ShiftService } from '../../../services/shifts/shift.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class SmartTableComponent implements OnInit {
  shiftState: Observable<{ shifts: NewShift[] }>;
  settings;

  ngOnInit() {
  this.settings = {
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
}

  source: LocalDataSource = new LocalDataSource();
/*
    constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
    }

*/
  constructor(private shiftService: ShiftService,
     private store: Store<{ SHIFTS: { shifts: NewShift[] } }>) {
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
      this.store.dispatch(new ShiftsActions.TryDeleteShift({
        id: 3,
        deletedShift: event.data,
      }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.store.dispatch(new ShiftsActions.TryUpdateShift({
      id: 3,
      updatedShift: event.newData,
    }));
    event.confirm.resolve();
  }
  onCreateConfirm(event): void {
      this.shiftService.createShift(event.newData).subscribe(value => {
        event.confirm.resolve();
      });
    // this.store.dispatch(new ShiftsActions.TryAddShift(event.newData, event.confirm.resolve));
  }
}
