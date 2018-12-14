import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';
import { StoreModule } from '@ngrx/store';

import { UsersComponent } from './users.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RolesService } from '../../services/roles/roles.service';
import { TablesRoutingModule, routedComponents } from './users-routing.module';
import { UserService } from '../../services/user/users.service';
import { usersReducer } from './store/users.reducers';


@NgModule({
  imports: [ThemeModule,
    NgxEchartsModule,
    NbCardModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    StoreModule.forFeature('USERS', usersReducer),
  ],
  declarations: [...routedComponents, UsersComponent], providers: [
  RolesService, UserService,
  ],
})
export class UsersModule { }
