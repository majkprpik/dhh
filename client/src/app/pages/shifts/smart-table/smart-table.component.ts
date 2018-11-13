import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { ShiftsService } from '../../../@core/data/shifts.service';
import { SmartTableService } from '../../../@core/data/smart-table.service';

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
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmEdit: true,
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
        type: 'string',
      },
      end: {
        title: 'End',
        type: 'string',
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
  constructor(private service: ShiftsService) {
    this.service.getShifts().subscribe(value => {
      const data = value;
      this.source.load(data);
    });
  } 

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to edit?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
