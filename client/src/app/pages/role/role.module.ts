import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { RoleComponent } from './role.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TablesRoutingModule, routedComponents } from './role-routing.module';
import { RolesService } from '../../services/roles/roles.service';
import { StoreModule } from '@ngrx/store';
import { rolesReducer } from './store/roles.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RolesEffects } from './store/roles.effects';

@NgModule({
  imports: [ThemeModule,
    NgxEchartsModule,
    NbCardModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    StoreModule.forFeature('ROLES', rolesReducer),
    EffectsModule.forRoot([RolesEffects]),
  ],
  declarations: [...routedComponents, RoleComponent], providers: [
    RolesService,
    ],
})
export class RoleModule { }
