import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DhhDashboardComponent } from './dhhdashboard/dhhdashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      /*{
        path: 'dashboard',
        component: ECommerceComponent
      },
      {
        path: 'iot-dashboard',
        component: DashboardComponent
      },*/
      {
        path: 'dhh-dashboard',
        component: DhhDashboardComponent,
      },
      {
        path: 'ui-features',
        loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule',
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule',
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
      },
      {
        path: 'editors',
        loadChildren: './editors/editors.module#EditorsModule',
      },
      {
        path: 'forms',
        loadChildren: './forms/forms.module#FormsModule',
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule',
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
      },
      {
        path: 'shifts',
        loadChildren: './shifts/shifts.module#ShiftsModule',
      },
      {
        path: 'dhh-dashboard1',
        loadChildren: './dhhdashboard1/dhhdashboard1.module#DhhDashboard1Module',
      },
      {
        path: 'role',
        loadChildren: './role/role.module#RoleModule',
      },
      {
        path: 'miscellaneous',
        loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
      },
      {
        path: '',
        redirectTo: 'dhh-dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
