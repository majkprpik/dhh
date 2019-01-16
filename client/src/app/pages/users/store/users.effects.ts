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
        .map((action: UsersActions.AddUser) => {
            return action.payload;
        })
        .switchMap((user: User) => {
            return this.userService.createUser(user);
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
        .map((action: UsersActions.UpdateUser) => {
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
        .map((action: UsersActions.DeleteUser) => {
            return action.payload;
        })
        .switchMap((user: {index: number, deletedUser: User}) => {
            return this.userService.deleteUser(user.deletedUser);
        })
        .map((user: {index: number, deletedUser: User}) => {
            return {
                type: UsersActions.DELETE_USER,
                payload: user.index,
            };
        });
    constructor(private userService: UserService, private actions$: Actions) {
    }
}
