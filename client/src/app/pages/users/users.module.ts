import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { UsersComponent } from './users.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RolesService } from '../../services/roles/roles.service';
import { TablesRoutingModule, routedComponents } from './users-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
@NgModule({
  imports: [ThemeModule, NgxEchartsModule, NbCardModule, TablesRoutingModule,
    Ng2SmartTableModule],
  declarations: [...routedComponents, UsersComponent], providers: [
    SmartTableService, RolesService,
  ],
})
export class UsersModule { }
