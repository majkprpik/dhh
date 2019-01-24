import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from '../../../models/user.model';

import * as UsersActions from '../store/users.actions';
import { Subscription } from 'rxjs';

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
  usersState: Observable<{ users: User[] }>;
  subsc = new Subscription();
  settings;
  roles = [
    { value: '5bdda1fe66c7e619987328a3', title: 'L1 agent' },
    { value: '5bdda2ad7a413708f0a13339', title: 'L2 agent' },
    { value: '5bdf4f46151b933458c1c964', title: 'L2 senior' },
  ];

  constructor(private store: Store<{ USERS: { users: User[] } }>) {
      this.store.dispatch(new UsersActions.FetchUsers());
      this.usersState = this.store.select('USERS');
      this.store.select('USERS').subscribe(value => {
        this.source.load(value.users);
      });
  }
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
        firstname: {
          title: 'Firstname',
          type: 'string',
        },
        lastname: {
          title: 'Lastname',
          type: 'string',
        },
        email: {
          title: 'E-mail',
          type: 'string',
        },
        _role: {
          title: 'Role',
          type: 'html',
          valuePrepareFunction: (cell, row) =>
            cell ? this.roles.find(v => v.value === cell).title : 'Unknown',
          editor: {
            type: 'list',
            config: {
              list: this.roles,
            },
          },
        },
      },
    };
  }


  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    alert(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.store.dispatch(new UsersActions.TryDeleteUser(event.data));
      event.confirm.resolve();
      // this.userService.deleteUser(event.data).subscribe(value => {
      //   event.confirm.resolve();
      // });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.store.dispatch(new UsersActions.TryUpdateUser({
      index: 3,
      updatedUser: event.newData,
    }));
    event.confirm.resolve();
  }
  onCreateConfirm(event): void {
    /*this.subsc = this.actionsSubj.subscribe(data => {
       if (data.type === 'ADD_USER') {
         event.confirm.resolve();
         this.subsc.unsubscribe();
       }
     });*/
    //  this.userService.createUser(event.newData).subscribe(value => {
    //   event.confirm.resolve();
    // });
    this.store.dispatch(new UsersActions.TryAddUser(event.newData, event.confirm.resolve));
  }
}
