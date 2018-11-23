import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { UserService } from '../../../@core/data/users.service';
// import { SmartTableService } from '../../../@core/data/smart-table.service';

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
      username: {
        title: 'Username',
        type: 'string',
      },
      password: {
        title: 'Password',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      surname: {
        title: 'Surname',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'number',
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
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => {
      this.source.load(value);
    });
  }

  onDeleteConfirm(event): void {
    alert(event);
    if (window.confirm('Are you sure you want to delete?')) {
      this.userService.deleteUser(event.data).subscribe(value => {
        event.confirm.resolve();
      });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.userService.updateUser(event.data).subscribe(value => {
      // this.source.load(value);
      event.confirm.resolve();
      /* alert(event);
      if (window.confirm('Are you sure you want to delete?')) {
        });
      } else {
        event.confirm.reject();
      }*/
    });
  }
  onCreateConfirm(event): void {
    this.userService.createUser(event.newData).subscribe(value => {
      // this.source.load(value);
      event.confirm.resolve();
      /* alert(event);
      if (window.confirm('Are you sure you want to delete?')) {
        });
      } else {
        event.confirm.reject();
      }*/
    });
  }
}
