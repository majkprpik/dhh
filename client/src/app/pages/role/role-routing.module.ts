import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './role.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

const routes: Routes = [{
    path: '',
    component: RoleComponent,
    children: [{
        path: 'smart-table',
        component: SmartTableComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
    RoleComponent,
    SmartTableComponent,
];
