import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { RoleComponent } from './role.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TablesRoutingModule, routedComponents } from './role-routing.module';
import { RolesService } from '../../services/roles/roles.service';

@NgModule({
  imports: [ThemeModule, NgxEchartsModule, NbCardModule, TablesRoutingModule,
    Ng2SmartTableModule],
  declarations: [...routedComponents, RoleComponent], providers: [
    RolesService,
    ],
})
export class RoleModule { }
