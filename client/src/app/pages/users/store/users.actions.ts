import { Action } from '@ngrx/store';
import { User } from '../../../models/user.model';

export const FETCH_USERS = 'FETCH_USERS';
export const SET_USERS = 'SET_USERS';
export const ADD_USER = 'ADD_USER';
export const TRY_ADD_USER = 'TRY_ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const TRY_UPDATE_USER = 'TRY_UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const TRY_DELETE_USER = 'TRY_DELETE_USER';

export class SetUsers implements Action {
    readonly type = SET_USERS;

    constructor(public payload: User[]) {}
  }
export class FetchUsers implements Action {
    readonly type = FETCH_USERS;
}
export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: User) {
    }
}
export class TryAddUser implements Action {
    readonly type = TRY_ADD_USER;
    constructor(public payload: User, public resolver: () => void) {
    }
}
export class UpdateUser implements Action {
    readonly type = UPDATE_USER;
    constructor(public payload:  {index: number, updatedUser: User}) {
    }
}
export class TryUpdateUser implements Action {
    readonly type = TRY_UPDATE_USER;
    constructor(public payload:  {index: number, updatedUser: User}) {
    }
}
export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: User ) {
    }
}
export class TryDeleteUser implements Action {
    readonly type = TRY_DELETE_USER;
    constructor(public payload: User) {
    }
}
export type UsersActions = SetUsers | FetchUsers | AddUser | TryAddUser | UpdateUser |
TryUpdateUser | DeleteUser | TryDeleteUser;
