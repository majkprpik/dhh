import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { DhhDashboard1Component } from './dhhdashboard1.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { HotTableModule } from '@handsontable/angular';
import { FormsModule } from '@angular/forms';

import { TablesRoutingModule, routedComponents } from './dhhdashboard1-routing.module';


@NgModule({
  imports: [ThemeModule, NgxEchartsModule, NbCardModule, TablesRoutingModule,
    HotTableModule, FormsModule ],
  declarations: [...routedComponents, DhhDashboard1Component],
})
export class DhhDashboard1Module { }
