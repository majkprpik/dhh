import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { DhhDashboard1Component } from './dhhdashboard1.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { HotTableModule } from '@handsontable/angular';
import { FormsModule } from '@angular/forms';

import { TablesRoutingModule, routedComponents } from './dhhdashboard1-routing.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { StoreModule } from '@ngrx/store';
import { dhhdashboardReducer } from './store/dhhdashboard.reducers';


@NgModule({
  imports: [ThemeModule,
    NgxEchartsModule,
    NbCardModule,
    TablesRoutingModule,
    HotTableModule.forRoot(),
    FormsModule,
    FlatpickrModule.forRoot(),
    StoreModule.forFeature('dhhdashboard', dhhdashboardReducer),

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [...routedComponents, DhhDashboard1Component],
})
export class DhhDashboard1Module { }
