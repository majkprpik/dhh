import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DhhDashboardModule } from './dhhdashboard/dhhdashboard.module';
import { DhhDashboard1Module } from './dhhdashboard1/dhhdashboard1.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DhhDashboardModule,
    DhhDashboard1Module,
    MiscellaneousModule,
  ],
  declarations: [...PAGES_COMPONENTS],
})
export class PagesModule { }
