import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
// import { fromPromise } from 'rxjs/observable/fromPromise';
import { UserService } from '../../../services/user/users.service';
import * as UsersActions from './users.actions';
import { User } from '../../../models/user.model';
@Injectable()
export class UsersEffects {
    @Effect()
    fetchUsers = this.actions$
        .ofType(UsersActions.FETCH_USERS)
        .switchMap((action: UsersActions.FetchUsers) => {
            return this.userService.getUsers();
        })
        .map((users) => {
            return {
                type: UsersActions.SET_USERS,
                payload: users,
            };
    });
    @Effect()
    addUser = this.actions$
        .ofType(UsersActions.TRY_ADD_USER)
        .map((action: UsersActions.TryAddUser) => {
            return { payload: action.payload, resolver: action.resolver };
        })
        .switchMap((value) => {
            value.resolver();
            return this.userService.createUser(value.payload);
        })
        .map((user: User) => {
            return {
                type: UsersActions.ADD_USER,
                payload: user,
            };
        });
    @Effect()
    updateUser = this.actions$
        .ofType(UsersActions.TRY_UPDATE_USER)
        .map((action: UsersActions.TryUpdateUser) => {
            return action.payload;
        })
        .switchMap((user: {index: number, updatedUser: User}) => {
            return this.userService.updateUser(user.updatedUser);
        })
        .map((user) => {
            return {
                type: UsersActions.UPDATE_USER,
                payload: user,
            };
        });
    @Effect()
    deleteUser = this.actions$
        .ofType(UsersActions.TRY_DELETE_USER)
        .map((action: UsersActions.TryDeleteUser) => {
            return action.payload;
        })
        .switchMap((user) => {
            return this.userService.deleteUser(user);
        })
        .map((user) => {
            return {
                type: UsersActions.DELETE_USER,
                payload: user,
            };
        });
    constructor(private userService: UserService, private actions$: Actions) {
    }
}
