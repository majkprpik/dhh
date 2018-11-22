import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { UsersComponent } from './users.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TablesRoutingModule, routedComponents } from './users-routing.module';
@NgModule({
  imports: [ThemeModule, NgxEchartsModule, NbCardModule, TablesRoutingModule,
    Ng2SmartTableModule],
  declarations: [...routedComponents, UsersComponent],
})
export class UsersModule { }
