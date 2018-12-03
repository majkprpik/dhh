import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

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
export class SmartTableComponent {

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
  constructor(private shiftService: ShiftService) {
    this.shiftService.getShifts().subscribe(value => {
      const data = value;
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    alert(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.shiftService.deleteShift(event.data).subscribe(value => {
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.shiftService.updateShift(event.newData).subscribe(value => {
      this.source.update(event.data, value);
      event.confirm.resolve();

    });
  }
  onCreateConfirm(event): void {
    this.shiftService.createShift(event.newData).subscribe(value => {
      event.confirm.resolve();

    });
  }
}
