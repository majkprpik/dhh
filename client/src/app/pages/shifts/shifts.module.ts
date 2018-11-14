import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ShiftsComponent } from './shifts.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TablesRoutingModule, routedComponents } from './shifts-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
@NgModule({
  imports: [ThemeModule, NgxEchartsModule, NbCardModule, TablesRoutingModule,
    Ng2SmartTableModule],
  declarations: [...routedComponents, ShiftsComponent], providers: [
    SmartTableService,
  ],
})
export class ShiftsModule { }
