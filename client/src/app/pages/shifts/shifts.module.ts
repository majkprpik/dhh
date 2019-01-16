import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ShiftsComponent } from './shifts.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TablesRoutingModule, routedComponents } from './shifts-routing.module';
import { ShiftService } from '../../services/shifts/shift.service';
import { StoreModule } from '@ngrx/store';
import { shiftsReducer } from './store/shifts.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShiftsEffects } from './store/shifts.effects';

@NgModule({
  imports: [ThemeModule,
    NgxEchartsModule,
    NbCardModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    StoreModule.forFeature('SHIFTS', shiftsReducer),
    EffectsModule.forRoot([ShiftsEffects]),
  ],
  declarations: [...routedComponents, ShiftsComponent], providers: [
    ShiftService,
    ],
})
export class ShiftsModule { }
