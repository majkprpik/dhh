import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { AgentComponent } from './agent.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [ThemeModule, NgxEchartsModule, NbCardModule],
  declarations: [AgentComponent],
})
export class AgentModule {}
