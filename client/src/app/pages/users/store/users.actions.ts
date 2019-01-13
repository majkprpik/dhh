import { Action } from '@ngrx/store';
import { User } from '../../../models/user.model';


export const ADD_USER = 'ADD_USER';
export const TRY_ADD_USER = 'TRY_ADD_USER';

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: User) {
    }
}

export class TryAddUser implements Action {
    readonly type = TRY_ADD_USER;
    constructor(public payload: User) {
    }
}

export type UsersActions = AddUser | TryAddUser;
