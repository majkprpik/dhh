import { Action } from '@ngrx/store';
import { Schedule } from '../../../models/schedule.model';
import { Role } from '../../../models/role.model';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const ADD_ROLE = 'ADD_ROLE';
export const FETCH_SCHEDULE = 'FETCH_SCHEDULE';

export class AddSchedule implements Action {
    readonly type = ADD_SCHEDULE;
    constructor(public payload: Schedule) {
    }
}
export class AddRole implements Action {
    readonly type = ADD_ROLE;
    constructor(public payload: Role) {
    }
}
export class FetchSchedule implements Action {
    readonly type = FETCH_SCHEDULE;

}
export type DhhdashboardActions = AddSchedule | AddRole | FetchSchedule;
