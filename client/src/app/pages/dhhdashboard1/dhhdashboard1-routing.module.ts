import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhhDashboard1Component } from './dhhdashboard1.component';
import { HandsontableComponent } from './handsontable/handsontable.component';

const routes: Routes = [{
    path: '',
    component: DhhDashboard1Component,
    children: [{
        path: 'handsontable',
        component: HandsontableComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
    DhhDashboard1Component,
    HandsontableComponent,
];
