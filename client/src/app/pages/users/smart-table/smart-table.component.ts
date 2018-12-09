import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { UserService } from '../../../services/user/users.service';
import { RolesService } from '../../../services/roles/roles.service';

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
  Roles: {_id: {type: 'string' }, name: {type: 'string'}} [] = [];
  roles = [
    { value: '5bdda1fe66c7e619987328a3', title: 'L1 agent' },
    { value: '5bdda2ad7a413708f0a13339', title: 'L2 agent' },
    { value: '5bdf4f46151b933458c1c964', title: 'L2 senior' },
  ];

  addRole(id: string, name: string) {
    this.roles.push({value: id, title: name});

  }
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

  source: LocalDataSource = new LocalDataSource();
  /*
      constructor(private service: SmartTableService) {
      const data = this.service.getData();
      this.source.load(data);
      }
  */
  constructor(private userService: UserService, private rolesService: RolesService) {
    this.userService.getUsers().subscribe(value => {
      this.source.load(value);
    });
    this.rolesService.getRoles().subscribe(data => {
      // console.log(data);
      // this.roles = value.map(r => ({ 'value': r._id, 'title': r.name }));
      // this.roles.push({ value: data._id, title: data.name });
      this.Roles.push(data);
      // console.log(this.Roles);
    });
  }

  // onAdd(){
  //   this.rolesService.getRoles().subscribe((value: Response) => {
  //     // console.log(value);
  //     const data = value.json();
  //     console.log(data);
  //   });
  // }



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
    this.userService.updateUser(event.newData).subscribe(value => {
      // this.source.load(value);
      this.source.update(event.data, value);
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
      this.source.update(event.data, value);
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
