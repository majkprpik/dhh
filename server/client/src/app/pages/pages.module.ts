import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DhhDashboardModule } from './dhhdashboard/dhhdashboard.module';
import { AgentModule } from './agent/agent.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DhhDashboardModule,
    MiscellaneousModule,
    AgentModule,
  ],
  declarations: [...PAGES_COMPONENTS],
})
export class PagesModule {}