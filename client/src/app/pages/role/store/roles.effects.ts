import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
// import { fromPromise } from 'rxjs/observable/fromPromise';
import { RolesService } from '../../../services/roles/roles.service';
import * as RolesActions from './roles.actions';
import { Role } from '../../../models/role.model';
@Injectable()
export class RolesEffects {
    @Effect()
    fetchRoles = this.actions$
        .ofType(RolesActions.FETCH_ROLE)
        .switchMap((action: RolesActions.FetchRole) => {
            return this.roleService.getRoles();
        })
        .map((roles) => {
            return {
                type: RolesActions.SET_ROLES,
                payload: roles,
            };
        });
    @Effect({dispatch: false})
    storeShifts = this.actions$
        .ofType(RolesActions.STORE_ROLE)
        .withLatestFrom(this.store.select('ROLES'))
        .switchMap(([action, state]) => {
            return this.roleService.createRole(state.roles);
        });
    constructor(private roleService: RolesService, private actions$: Actions,
        private store: Store<{ ROLES: { roles: Role[] } }>) {
    }
}
