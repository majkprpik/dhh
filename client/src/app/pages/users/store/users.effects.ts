import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
// import { fromPromise } from 'rxjs/observable/fromPromise';
import { UserService } from '../../../services/user/users.service';
import * as UsersActions from './users.actions';
import { User } from '../../../models/user.model';
@Injectable()
export class UsersEffects {
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
    constructor(private userService: UserService, private actions$: Actions) {
    }
}
