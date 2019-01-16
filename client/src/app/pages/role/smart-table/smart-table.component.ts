import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';

import { Role } from '../../../models/role.model';
import { Store } from '@ngrx/store';
import * as RolesActions from '../store/roles.actions';

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
  roleState: Observable<{ roles: Role[] }>;

  permissions = [
    { value: '5be5af5c4478b1243c054827', title: 'admin_v3' },
  ];
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
        title: 'Role name',
        type: 'string',
      },
      permission: {
        title: 'Permission',
          type: 'html',
          valuePrepareFunction: (cell, row) =>
            cell ? this.permissions.find(v => v.value === cell).title : 'Unknown',
          editor: {
            type: 'list',
            config: {
              list: this.permissions,
            },
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
  constructor(private store: Store<{ ROLES: { roles: Role[] } }>) {
    this.store.dispatch(new RolesActions.FetchRole());
    this.roleState = this.store.select('ROLES');
    this.store.select('ROLES').subscribe(value => {
      const data = value.roles;
      this.source.load(data);
    });
  }
  onDeleteConfirm(event): void {
    alert(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.store.dispatch(new RolesActions.DeleteRole(event.data));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.store.dispatch(new RolesActions.UpdateRole(event.newData));
    event.confirm.resolve();
  }
  onCreateConfirm(event): void {
    this.store.dispatch(new RolesActions.AddRole(event.newData));
    event.confirm.resolve();
  }

}
