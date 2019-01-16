import { Action } from '@ngrx/store';
import { Role } from '../../../models/role.model';

export const SET_ROLES = 'SET_ROLES';
export const ADD_ROLE = 'ADD_ROLE';
export const UPDATE_ROLE = 'UPDATE_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';
export const FETCH_ROLE = 'FETCH_ROLE';
export const STORE_ROLE = 'STORE_ROLE';

export class SetRoles implements Action {
    readonly type = SET_ROLES;

    constructor(public payload: Role[]) {}
  }
export class AddRole implements Action {
    readonly type = ADD_ROLE;
    constructor(public payload: Role) {
    }
}
export class UpdateRole implements Action {
    readonly type = UPDATE_ROLE;
    constructor(public payload: {id: string, updatedRole: Role}) {
    }
}

export class DeleteRole implements Action {
    readonly type = DELETE_ROLE;
    constructor(public payload: number ) {
    }
}

export class FetchRole implements Action {
    readonly type = FETCH_ROLE;
}

export class StoreRole implements Action {
    readonly type = STORE_ROLE;
}
export type RolesActions = SetRoles | AddRole | UpdateRole | DeleteRole | FetchRole | StoreRole;
